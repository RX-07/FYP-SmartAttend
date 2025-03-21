import { auth, db, doc, getDoc, getDocs, updateDoc, storage, ref, deleteObject, uploadBytes, getDownloadURL, collection, onSnapshot } from './FirebaseConfig.js';
import emailjs from "@emailjs/browser";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

toastr.options.positionClass = 'toast-bottom-right'; 

let uid;
let selectedMonth = "";
let studentChartInstance = null;

auth.onAuthStateChanged((authUser) => {
    if (authUser) {
        uid = authUser.uid;
        fetchProfileData(uid); 
        displayMedicalCertificates(uid);
        displaySubjectOverview(uid);
    } else {
        console.log('No user is currently logged in');
    }
});

// Function to fetch profile data from Firestore
async function fetchProfileData(userRef) {
    try {
        const studentDocRef = doc(db, "Students", userRef);
        const docSnap = await getDoc(studentDocRef);
        if (docSnap.exists()) {
            const userData = docSnap.data();
            displayProfileData(userData);
        } else {
            console.log('No such document!');
        }
    } catch (error) {
        console.log('Error fetching document:', error);
    }
}

// Profile Image Update with File Size Limit
const fileInput = document.getElementById('file-upload');
const profileImg = document.getElementById('profile-img');

fileInput.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    const maxSize = 2 * 1024 * 1024;

    // Check file size
    if (file && file.size <= maxSize) {
        const studentDocRef = doc(db, "Students", uid);
        const docSnap = await getDoc(studentDocRef);

        if (docSnap.exists()) {
            const currentData = docSnap.data();
            const oldImageUrl = currentData.profileImageURL;

            // Delete old image if it exists
            if (oldImageUrl) {
                const oldImageRef = ref(storage, oldImageUrl);
                await deleteObject(oldImageRef).catch((error) => console.error("Error deleting old image:", error));
            }

            // Upload new image
            const newImageRef = ref(storage, `profileImages/${uid}-${Date.now()}`);
            await uploadBytes(newImageRef, file);

            // Update Firestore with new image URL
            const newImageUrl = await getDownloadURL(newImageRef);
            await updateDoc(studentDocRef, { profileImageURL: newImageUrl });

            // Update profile image on the page
            profileImg.src = newImageUrl;
            window.location.reload();
        }
    } else {
        toastr.warning("Please upload an image smaller than 2 MB.");
    }
});

// Display Profile Data
function displayProfileData(data) {
    // Populate form fields
    document.querySelector('#full-name').value = data.fullName;
    document.querySelector('#student-id').value = data.studentID;
    document.querySelector('#email').value = data.email;
    document.querySelector('#department').value = data.department;
    document.querySelector('#phone').value = data.phone;

    // Display in profile section
    document.querySelector('#display-full-name').textContent = data.fullName;
    document.querySelector('#display-student-id').textContent = data.studentID;
    document.querySelector('#display-email').textContent = data.email;
    document.querySelector('#display-department').textContent = data.department;
    document.querySelector('#display-phone').textContent = data.phone;

    // Profile image handling
    if (data.profileImageURL) {
        profileImg.src = data.profileImageURL;
    } else {
        profileImg.src = 'Images/Profile.jpeg'; // Default image
    }
}

async function displayMedicalCertificates() {
    const mcDocRef = doc(db, "MC", uid);
    try {
        const mcDoc = await getDoc(mcDocRef); // Fetch the logged-in user's MC document
        const tbody = document.querySelector('.mc-submission tbody');
        tbody.innerHTML = ''; // Clear table

        if (mcDoc.exists()) {
            const mcData = mcDoc.data();

            if (mcData.submittedMC) {
                const submittedMC = mcData.submittedMC;


                const sortedMCEntries = Object.entries(submittedMC)
                    .map(([mcKey, mcDetails]) => {
                        const [day, month, year] = mcDetails.submittedDate.split("-");
                        const isoDate = `${year}-${month}-${day}`;
                        return { mcKey, ...mcDetails, parsedDate: new Date(isoDate) };
                    })
                    .sort((a, b) => b.parsedDate - a.parsedDate);

                // Render sorted entries
                sortedMCEntries.forEach(mc => {
                    if (mc.status) {
                        // Create a row for each MC

                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${mc.reason}</td>
                            <td><a href="${mc.file}" target="_blank">View File</a></td>
                            <td>${mc.status}</td>
                            <td>${mc.submittedDate}</td>
                        `;
                        tbody.appendChild(row);
                    }
                });
            }
        } else {
            console.log("No medical certificate data found for the user.");
        }
    } catch (error) {
        console.error("Error fetching medical certificates:", error);
    }
}


// Modal controls
const editModal = document.getElementById("edit-modal");
const editModalBtn = document.getElementById("edit-modal-btn");
const closeModal = document.querySelector(".close");
const cancelEditBtn = document.getElementById("cancel-edit-btn");
const editProfileForm = document.getElementById("edit-profile-form");

editModalBtn.addEventListener("click", () => editModal.style.display = "flex");
closeModal.addEventListener("click", () => editModal.style.display = "none");
cancelEditBtn.addEventListener("click", () => editModal.style.display = "none");

// Form Submission
editProfileForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Fetch updated values
    const updatedFullName = document.getElementById("full-name").value;
    const updatedEmail = document.getElementById("email").value;
    const updatedPhone = document.getElementById("phone").value;
    const updatedDepartment = document.getElementById("department").value;

    // Update displayed data
    document.getElementById("display-full-name").textContent = updatedFullName;
    document.getElementById("display-email").textContent = updatedEmail;
    document.getElementById("display-phone").textContent = updatedPhone;
    document.getElementById("display-department").textContent = updatedDepartment;

    // Update Firestore
    const studentDocRef = doc(db, "Students", uid);
    try {
        await updateDoc(studentDocRef, {
            fullName: updatedFullName,
            email: updatedEmail,
            phone: updatedPhone,
            department: updatedDepartment
        });
        toastr.success('Information successfully updated!');
    } catch (error) {
        console.error('Error updating document: ', error);
    }

    // Close modal
    editModal.style.display = "none";
});

// Fetch approved subjects for logged-in user
export async function fetchSubjectOverview(uid) {
    try {
        const studentDoc = await getDoc(doc(db, "Students", uid));
        if (studentDoc.exists()) {
            const enrolledSubjects = studentDoc.data().enrolledSubjects || {};
            const approvedSubjects = Object.entries(enrolledSubjects)
                .filter(([_, subjectData]) => subjectData.status === "Enrolled")
                .map(([subjectId, subjectData]) => ({
                    id: subjectId,
                    ...subjectData
                }));
            return approvedSubjects;
        } else {
            toastr.error("Student document not found");
            return [];
        }
    } catch (error) {
        toastr.error("Error fetching approved subjects:", error);
        return [];
    }
}

export async function getAttendanceData(uid, subjectId) {
    const classesRef = collection(db, `Subjects/${subjectId}/Classes`);
    let totalClasses = 0;
    let totalAttendedClasses = 0;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    try {
        const querySnapshot = await getDocs(classesRef);

        querySnapshot.forEach((doc) => {
            const classId = doc.id;
            const classDateStr = classId.split("_")[0]; 
            const classDate = new Date(classDateStr);

            if (classDate <= today) { 
                totalClasses++;

                const attendanceData = doc.data().attendance;
                if (attendanceData && attendanceData[uid]) {
                    totalAttendedClasses++;
                }
            }
        });
    } catch (error) {
        console.error("Error fetching attendance data:", error);
    }

    return { totalClasses, totalAttendedClasses };
}

export async function displaySubjectOverview(uid) {
    const subjectContainer = document.getElementById("subjectOverview");

    if (!subjectContainer) {
        console.error("Element with ID 'subjectOverview' not found.");
        return;
    }

    subjectContainer.innerHTML = `<div class="text-center"><div class="spinner-border text-primary" role="status"></div><p>Loading Info...</p></div>`;

    try {
        const approvedSubjects = await fetchSubjectOverview(uid);

        if (!approvedSubjects || approvedSubjects.length === 0) {
            subjectContainer.innerHTML = "<p>No approved subjects found.</p>";
            return;
        }

        subjectContainer.innerHTML = ""; // Clear loading text

        // Create the subject cards dynamically
        const subjectWrapper = document.createElement("div");
        subjectWrapper.className = "subject-wrapper";

        for (const subject of approvedSubjects) {
            const { totalClasses, totalAttendedClasses } = await getAttendanceData(uid, subject.id);
            const attendanceRatio = `${totalAttendedClasses}/${totalClasses}`;
            let statusColor = "gray";

            const attendancePercentage = totalClasses > 0 
                ? totalAttendedClasses / totalClasses 
                : 0;
            
            if (attendancePercentage >= 0.8) {
                statusColor = "green"; // High attendance
            } else if (attendancePercentage >= 0.5) {
                statusColor = "yellow"; // Medium attendance
            } else {
                statusColor = "red"; // Low attendance
            }

            const subjectCard = document.createElement("div");
            subjectCard.className = "subject-card";
            subjectCard.innerHTML = `
                <h3 class="subject-id">${subject.id}</h3>
                <p class="subject-name">${subject.name}</p>
                <p class="attendance-label">Total Classes Attended</p>
                <div class="attendance-status">
                    <span class="status-icon ${statusColor}">✔</span>
                    <span class="attendance-count">${attendanceRatio}</span>
                </div>
            `;
            subjectWrapper.appendChild(subjectCard);
        }

        subjectContainer.appendChild(subjectWrapper);
    } catch (error) {
        console.error("Error displaying subjects:", error);
        subjectContainer.innerHTML = "<p>Error loading subjects.</p>";
    }
}

async function sendAttendanceWarnings(uid) {

    try {
        //  Fetch student data for the logged-in user
        const studentRef = doc(db, "Students", uid);
        const studentDoc = await getDoc(studentRef);

        if (!studentDoc.exists()) {
            console.log(` No student data found for UID: ${uid}`);
            return;
        }

        const studentData = studentDoc.data();
        const studentEmail = studentData.email;
        const studentName = studentData.fullName;
        const enrolledSubjects = await fetchSubjectOverview(uid);
                

        for (const subject of enrolledSubjects) {

            //  Fetch attendance data for this subject
            const { totalClasses, totalAttendedClasses } = await getAttendanceData(uid, subject.id);

            if (totalClasses === 0) {
                continue;
            }

            const attendancePercentage = (totalAttendedClasses / totalClasses) * 100;


            //  Send warning if attendance < 50% after 4 weeks (or middle semester)
            if (totalClasses >= 4 && attendancePercentage < 50) {
                await sendWarningEmail(studentEmail, studentName, subject.id, attendancePercentage);
            }
        }
    } catch (error) {
        console.error( error);
    }
}

async function sendWarningEmail(email, fullName, subjectId, attendancePercentage) {
    emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
            to_email: email, 
            user_name: fullName,
            subject_id: subjectId,
            attendance_percentage: attendancePercentage.toFixed(2), // Format percentage
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .catch(error => {
        console.error("Error sending email:", error);
    });
}

document.getElementById("strawberry-burst").addEventListener("click", async () => {
    await sendAttendanceWarnings(uid);
});