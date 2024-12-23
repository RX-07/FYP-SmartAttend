import readXlsxFile from 'read-excel-file';
import { collection, db, doc, getDocs, writeBatch } from './FirebaseConfig.js';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

toastr.options.positionClass = 'toast-bottom-right';

const subjectCodes = [
    "BIT101", "BIT102", "BIT103", "BIT104", "BIT106", "BIT107", "BIT108", "BIT110",
    "BIT200", "BIT201", "BIT206", "BIT210", "BIT212", "BIT216", "BIT217", "BIT219",
    "BIT301", "BIT303", "BIT304", "BIT305", "BIT306", "BIT310", "BIT311", "BIT312",
    "BDA100", "BDA101", "BDA203", "BDA205", "BDA206", "BDA306", "BDA307",
    "BCS102", "BCS105", "BCS201", "BCS202", "BCS302"
  ];

const venueMap = {};

export function getSemester() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextYear = currentYear + 1;

    // If the current month is December, set all semester years to the next year
    const isDecember = now.getMonth() === 11;

    const semesterYear = isDecember ? nextYear : currentYear;

    // Define semester start and end dates dynamically for each year
    const shortSemesterStart = new Date(`${semesterYear}-05-27`);
    const longSemesterStart1 = new Date(`${semesterYear}-01-08`);
    const longSemesterStart2 = new Date(`${semesterYear}-08-19`);

    const longSemesterEnd1 = new Date(longSemesterStart1);
    longSemesterEnd1.setMonth(longSemesterEnd1.getMonth() + 4);

    const longSemesterEnd2 = new Date(longSemesterStart2);
    longSemesterEnd2.setMonth(longSemesterEnd2.getMonth() + 4);

    // Calculate the difference between current date and the start/end dates of each semester
    const getDateDifference = (date) => Math.abs(now - date);

    const shortSemesterDiff = getDateDifference(shortSemesterStart);
    const longSemesterDiff1 = getDateDifference(longSemesterStart1);
    const longSemesterDiff2 = getDateDifference(longSemesterStart2);

    // Check if current date is within the range of each semester
    const isInShortSemester = now >= shortSemesterStart && now <= longSemesterStart1;
    const isInLongSemester1 = now >= longSemesterStart1 && now <= longSemesterEnd1;
    const isInLongSemester2 = now >= longSemesterStart2 && now <= longSemesterEnd2;

    // Determine the closest and active semester
    if (isInShortSemester) {
        return { type: 'short', weeks: 7 };
    } else if (isInLongSemester1) {
        return { type: 'long', weeks: 14 };
    } else if (isInLongSemester2) {
        return { type: 'long', weeks: 14 };
    } else {
        // If no active semester, return the closest one
        if (shortSemesterDiff <= longSemesterDiff1 && shortSemesterDiff <= longSemesterDiff2) {
            return { type: 'short', weeks: 7 };
        } else if (longSemesterDiff1 <= longSemesterDiff2) {
            return { type: 'long', weeks: 14 };
        } else {
            return { type: 'long', weeks: 14 };
        }
    }
}



// Function to delete all documents in /Subjects/{subjectCode}/Classes using batch operations
export async function deleteClassesSubCollectionBatch(subjectCode, batch) {
    const classesRef = collection(db, 'Subjects', subjectCode, 'Classes');
    const snapshot = await getDocs(classesRef);

    if (!snapshot.empty) {
        // Add each delete operation to the batch
        snapshot.docs.forEach(docSnapshot => {
            batch.delete(docSnapshot.ref);
        });
    } 
}

// Function to delete the subject document after deleting the classes
export async function deleteSubjectDocumentBatch(subjectCode, batch) {
    const subjectRef = doc(db, 'Subjects', subjectCode);
    batch.delete(subjectRef);
}

export async function deleteAllSubjectsParallel() {
    const deletePromises = subjectCodes.map(async subjectCode => {
        const batch = writeBatch(db);
        await deleteClassesSubCollectionBatch(subjectCode, batch);
        await deleteSubjectDocumentBatch(subjectCode, batch);
        return batch.commit();
    });

    await Promise.all(deletePromises);  // Wait for all deletions to complete in parallel
}

// Function to check if /Subjects collection already exists
export async function checkIfSubjectsExist() {
    const subjectsRef = collection(db, 'Subjects');
    const snapshot = await getDocs(subjectsRef);

    return snapshot.empty; 
}

// Remaining functions related to timetable processing and displaying
export function processTimetableData(rows) {
    const timetable = {
        Monday: {},
        Tuesday: {},
        Wednesday: {},
        Thursday: {},
        Friday: {}
    };

    let currentDay = '';

    rows.forEach((row, rowIndex) => {
        if (rowIndex === 0 || row[0] === 'Day' || row[0] === '') return;

        const subjectCode = row[1];
        const venue = row[2];
        const timeSlot = row[3];

        if (row[0] && row[0] !== currentDay) {
            currentDay = row[0];
        }

        if (subjectCode && venue && timeSlot) {
            if (!timetable[currentDay]) {
                timetable[currentDay] = {};
            }

            if (!timetable[currentDay][timeSlot]) {
                timetable[currentDay][timeSlot] = [];
            }

            timetable[currentDay][timeSlot].push({
                subject: subjectCode,
                venue: venue
            });
        }
    });

    if (Object.keys(timetable).length === 0 || !Object.values(timetable).some(day => Object.keys(day).length > 0)) {
        document.getElementById('status').innerText = 'Error: Timetable data is missing or invalid.';
        return null;
    }

    return displayTimetable(timetable);
}

export function displayTimetable(timetable) {
    const tableBody = document.getElementById('timetable').getElementsByTagName('tbody')[0];
    const tableHeader = document.getElementById('timetable').getElementsByTagName('thead')[0].getElementsByTagName('tr')[0];

    tableBody.innerHTML = '';
    tableHeader.innerHTML = '';

    const timeSlotHeader = document.createElement('th');
    timeSlotHeader.textContent = 'Time / Day';
    tableHeader.appendChild(timeSlotHeader);

    let timeSlots = new Set();
    Object.keys(timetable).forEach(day => {
        Object.keys(timetable[day]).forEach(timeSlot => {
            timeSlots.add(timeSlot);
        });
    });

    timeSlots = Array.from(timeSlots).sort((a, b) => {
        const timeOrder = {
            '9AM - 12PM': 1,
            '10AM - 1PM': 2,
            '2PM - 4PM': 3,
            '2PM - 5PM': 4,
            '3PM - 4PM': 5,
            '4PM - 5PM': 6
        };

        return timeOrder[a] - timeOrder[b];
    });

    timeSlots.forEach(timeSlot => {
        const timeSlotHeaderCell = document.createElement('th');
        timeSlotHeaderCell.textContent = timeSlot;
        tableHeader.appendChild(timeSlotHeaderCell);
    });

    Object.keys(timetable).forEach(day => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = day;

        timeSlots.forEach(timeSlot => {
            const cell = row.insertCell();
            const subjects = timetable[day][timeSlot];

            if (subjects && subjects.length > 0) {
                let cellContent = '';
                subjects.forEach(subject => {
                    cellContent += `${subject.subject} (${subject.venue}) <br><br>`;

                    if (!venueMap[subject.venue]) {
                        venueMap[subject.venue] = [];
                    }
                    venueMap[subject.venue].push(subject.subject);
                });
                cell.innerHTML = cellContent;
            } else {
                cell.innerHTML = '';
            }
        });
    });
}

// Function to save the new timetable data
export async function saveTimetableToFirestore(timetable) {
    const semester = getSemester();
    const numberOfWeeks = semester.weeks; 

    if (semester.type === 'unknown') {
        toastr.error('Error: Could not determine the semester.');
        return;
    }

    // Get the start date of the semester (based on the current semester)
    const semesterStartDate = getSemesterStartDate();

    try {
        const batch = writeBatch(db);

        // Iterate over each subject in the timetable
        Object.keys(timetable).forEach(subjectCode => {
            const subjectRef = doc(db, 'Subjects', subjectCode);

            // Iterate over the weeks
            for (let week = 1; week <= numberOfWeeks; week++) {
                // Iterate over the time slots for the subject
                timetable[subjectCode].forEach(timeSlot => {
                    // Get the class day (e.g., Monday, Tuesday)
                    const classDay = timeSlot.split('_')[0];

                    // Calculate the class date for the specific week and day
                    const classDate = getClassDateForWeek(semesterStartDate, classDay, week);

                    // Create the sub-collection document name with the format 'date_timeSlot'
                    const classRef = doc(collection(subjectRef, 'Classes'), `${classDate}_${timeSlot}`);

                    let venue = '';
                    Object.keys(venueMap).forEach(venueKey => {
                        if (venueMap[venueKey].includes(subjectCode)) {
                            venue = venueKey;
                        }
                    });

                    batch.set(classRef, {
                        attendance: {},  // Placeholder for attendance information
                        week,
                        timeSlot,
                        classDate,
                        venue
                    });
                });
            }
        });

        await batch.commit(); 
    } catch (error) {
        throw error; 
    }
}

// Helper function to get the start date of the semester
export function getSemesterStartDate() {
    const now = new Date();
    const semester = getSemester(); // Get the current semester
    const currentYear = now.getFullYear();
    const nextYear = currentYear + 1;

    // Determine the semester year based on whether it's December
    const isDecember = now.getMonth() === 11;
    const semesterYear = isDecember ? nextYear : currentYear;

    // Define semester start dates
    const shortSemesterStart = new Date(`${semesterYear}-05-27`);
    const longSemesterStartJan = new Date(`${semesterYear}-01-08`);
    const longSemesterStartAug = new Date(`${semesterYear}-08-19`);

    // Define semester end dates (4 months after start)
    const longSemesterEndJan = new Date(longSemesterStartJan);
    longSemesterEndJan.setMonth(longSemesterEndJan.getMonth() + 4);

    const longSemesterEndAug = new Date(longSemesterStartAug);
    longSemesterEndAug.setMonth(longSemesterEndAug.getMonth() + 4);

    let semesterStartDate = null;

    // Check if the current date is within any semester
    if (now >= longSemesterStartJan && now <= longSemesterEndJan) {
        semesterStartDate = longSemesterStartJan;
    } else if (now >= longSemesterStartAug && now <= longSemesterEndAug) {
        semesterStartDate = longSemesterStartAug;
    } else if (now < longSemesterStartJan) {
        // If it's before the January semester
        semesterStartDate = longSemesterStartJan;
    } else if (now > longSemesterEndAug) {
        // If it's after the August semester, move to next January semester
        semesterStartDate = new Date(`${nextYear}-01-08`);
    }

    if (!semesterStartDate) {
        console.error("Semester start date is null.");
    }

    return semesterStartDate;
}

// Helper function to calculate the date for a specific class day and week
export function getClassDateForWeek(startDate, classDay, weekNumber) {
    const dayOfWeekMap = {
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5
    };

    // Start with the first day of the semester
    const classDate = new Date(startDate);

    // Ensure the provided class day is valid
    if (!dayOfWeekMap[classDay]) {
        return null;
    }

    // Find the first occurrence of the given class day
    const currentDay = classDate.getDay();
    const targetDay = dayOfWeekMap[classDay];
    const dayOffset = (targetDay - currentDay + 7) % 7; // Offset to the target day of the week
    classDate.setDate(classDate.getDate() + dayOffset);

    // Add the number of weeks to the date to get the specific week
    const additionalDays = (weekNumber - 1) * 7;
    classDate.setDate(classDate.getDate() + additionalDays);

    // Format the date to 'YYYY-MM-DD' (for example, '2024-08-19')
    const year = classDate.getFullYear();
    const month = (classDate.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-based
    const day = classDate.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}

// Function to process timetable data from the UI
export function processTimetableDataFromUI() {
    const timetable = {};

    const tableBody = document.getElementById('timetable').getElementsByTagName('tbody')[0];
    const rows = tableBody.rows;

    for (let i = 0; i < rows.length; i++) {
        const day = rows[i].cells[0].textContent.trim();
        for (let j = 1; j < rows[i].cells.length; j++) {
            const timeSlot = document.querySelector('thead tr').cells[j].textContent.trim();
            const subjects = rows[i].cells[j].innerHTML.split('<br><br>').filter(Boolean);

            subjects.forEach(subjectWithVenue => {
                const [subjectCode] = subjectWithVenue.replace(/\(|\)/g, '').split(' ');

                if (!timetable[subjectCode]) {
                    timetable[subjectCode] = [];
                }

                timetable[subjectCode].push(`${day}_${timeSlot}`);
            });
        }
    }

    return timetable;
}

// Modify the existing DOMContentLoaded listener to implement the delete functionality
document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('timetable-file');
    const form = document.getElementById('upload-timetable-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const file = input.files[0];

        // Check if the file is an Excel file
        if (!file || !file.name.match(/\.(xls|xlsx)$/)) {
            toastr.warning('Please upload a valid Excel file.');
            return;
        }

        // Use readXlsxFile to read the uploaded file
        readXlsxFile(file).then(function (data) {

            if (data && data.length > 0) {
                const headers = data[0]; // First row should contain the headers
                const expectedHeaders = ['Day', 'Subject Code', 'Venue', 'Time'];

                const isValid = expectedHeaders.every((header, index) => header === headers[index]);

                if (!isValid) {
                    document.getElementById('status').innerText = 'Error: The file does not have the correct headers (Day, Subject Code, Venue, Time).';
                    return;
                }

                const parsedSubjects = processTimetableData(data);

                if (parsedSubjects) {
                    document.getElementById('status').innerText = 'Timetable uploaded and processed successfully!';
                }
            } else {
                document.getElementById('status').innerText = 'Error: Invalid Excel file format.';
            }
        }).catch(function (error) {
            toastr.error('Error reading Excel file:', error);
            document.getElementById('status').innerText = 'Error processing file!';
        });

        // Implement the save button logic
        document.getElementById('save').addEventListener('click', async () => {

            const saveButton = document.getElementById('save');
            saveButton.disabled = true;

            const timetable = processTimetableDataFromUI();

            if (!timetable) {
                toastr.warning('Error: No timetable data to save.');
                return;
            }

            try {
                // Check if /Subjects collection already exists
                const subjectsExist = await checkIfSubjectsExist();

                if (subjectsExist) {
                    // Ask the user for confirmation before overwriting
                    const confirmOverwrite = confirm('Existing subjects found. Do you want to overwrite the timetable?');
                    if (!confirmOverwrite) {
                        toastr.info('Timetable save operation cancelled.');
                        return;  // Stop if the user cancels the operation
                    }
                }

                // Proceed with deletion and saving
                await deleteAllSubjectsParallel();
                await saveTimetableToFirestore(timetable);

                toastr.success('Timetable saved successfully!');
            } catch (error) {
                toastr.error('Error saving timetable. Please try again.', error);
            } finally {
                saveButton.disabled = false;
            }
        });
    });
});