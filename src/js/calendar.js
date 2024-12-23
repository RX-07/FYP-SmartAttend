import {
    auth,
    db,
    storage,
    doc,
    getDoc,
    collection,
    getDocs,
    updateDoc,
    ref,
    uploadBytes,
    getDownloadURL,
} from "./FirebaseConfig.js";
import ical from 'ical-generator';
import moment from 'moment-timezone';


// Function to convert timeSlot and classDate into start and end times
export function getStartEndTime(timeSlot, classDate) {
    const [day, timeRange] = timeSlot.split('_');
    const [startTime, endTime] = timeRange.split(' - ');

    const startDate = moment.tz(classDate, 'YYYY-MM-DD', 'Asia/Kuala_Lumpur'); // Parse the class date
    const startHour = moment(startTime, 'hA').format('HH:mm');
    const endHour = moment(endTime, 'hA').format('HH:mm');

    const startMoment = startDate.clone().set({
        hour: parseInt(startHour.split(':')[0]),
        minute: parseInt(startHour.split(':')[1]),
    });

    const endMoment = startDate.clone().set({
        hour: parseInt(endHour.split(':')[0]),
        minute: parseInt(endHour.split(':')[1]),
    });

    return {
        start: startMoment.toDate(),
        end: endMoment.toDate(),
    };
}

// Function to generate calendar for the logged-in user
export async function generateCalendar(uid) {
    const calendar = ical({ name: 'Class Schedule' });

    try {
        // Fetch user's enrolled subjects from Firestore
        const userDocRef = doc(db, 'Students', uid);
        const userDoc = await getDoc(userDocRef);
        const enrolledSubjects = userDoc.data()?.enrolledSubjects || {};

        const enrolledSubjectsFiltered = Object.entries(enrolledSubjects)
            .filter(([subjectKey, subject]) => subject.status === 'Enrolled') // Only keep subjects with status "enrolled"
            .reduce((acc, [subjectKey, subject]) => {
                acc[subjectKey] = subject; // Rebuild the object with the filtered subjects
                return acc;
            }, {});

        // Loop through each enrolled subject
        for (const subjectKey in enrolledSubjectsFiltered) {
            const subjectRef = collection(db, 'Subjects', subjectKey, 'Classes');
            const classesSnapshot = await getDocs(subjectRef);

            // Add each class to the calendar
            classesSnapshot.forEach(classDoc => {
                const classData = classDoc.data();
                const { timeSlot, classDate, week, venue } = classData;

                // Use the updated getStartEndTime function with classDate
                const { start, end } = getStartEndTime(timeSlot, classDate);

                calendar.createEvent({
                    start: start,
                    end: end,
                    summary: `Lecture & Tutorial ${subjectKey}`,
                    description: `Week ${week}, Date: ${classDate}`,
                    location: `${venue}`,
                    alarms: [
                        {
                            type: 'display',
                            trigger: 60 * 15, // 15 minutes before the event
                            description: `${subjectKey} class is starting soon!`
                        }
                    ]
                });
            });
        }

        // Return the iCalendar as a string
        return calendar.toString();
    } catch (error) {
        console.error('Error generating calendar:', error);
    }
}

// Function to upload calendar to Firebase Storage and generate URL
export async function uploadCalendar(uid, icsData) {
    try {
        const storageRef = ref(storage, `calendars/${uid}.ics`);
        const blob = new Blob([icsData], { type: "text/calendar" });

        // Upload the file to Firebase Storage
        await uploadBytes(storageRef, blob);

        // Get the public URL of the uploaded file
        const downloadUrl = await getDownloadURL(storageRef);

        // Save the URL in Firestore
        const userDocRef = doc(db, "Students", uid);
        await updateDoc(userDocRef, { calendarUrl: downloadUrl });

        // Display the calendar URL
        const calendarLinkElement = document.getElementById("calendar-link");
        calendarLinkElement.setAttribute("href", downloadUrl);

    } catch (error) {
        console.error("Error uploading calendar:", error);
    }
}

// Function to check and update the calendar for the user
export async function checkAndUpdateCalendar(uid) {
    try {
        const userDocRef = doc(db, 'Students', uid);
        const userDoc = await getDoc(userDocRef);
        const currentCalendarUrl = userDoc.data()?.calendarUrl;

        if (currentCalendarUrl) {
            const icsData = await generateCalendar(uid);
            await uploadCalendar(uid, icsData);
        } else {
            const icsData = await generateCalendar(uid);
            await uploadCalendar(uid, icsData);
        }
    } catch (error) {
        console.error('Error checking/updating calendar:', error);
    }
}

// Trigger calendar generation and upload
auth.onAuthStateChanged(async (authUser) => {
    if (authUser) {
        const uid = authUser.uid;

        generateCalendar(uid).then(icsData => {
            uploadCalendar(uid, icsData);
        }).catch(error => {
            console.error('Error generating calendar:', error);
        });
    } else {
        console.log("No user is currently logged in");
    }
});
