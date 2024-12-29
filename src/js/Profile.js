import { auth, db, doc, getDoc, updateDoc, storage, ref, deleteObject, uploadBytes, getDownloadURL, collection, onSnapshot } from './FirebaseConfig.js';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

toastr.options.positionClass = 'toast-bottom-right'; 

let uid;

auth.onAuthStateChanged((authUser) => {
    if (authUser) {
        uid = authUser.uid;
        fetchProfileData(uid); 
        displayMedicalCertificates(uid);
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
            displayAttendanceOverview(userData);
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

// Fetch the count of submitted medical certificates for the logged-in user
async function fetchMedicalCertificateCount(userId) {
    try {
        const mcDocRef = doc(db, "MC", userId);
        const mcDoc = await getDoc(mcDocRef);

        if (mcDoc.exists()) {
            const mcData = mcDoc.data();
            if (mcData.submittedMC) {
                // Filter for only valid MCs
                return Object.values(mcData.submittedMC).filter(mc => mc.status).length;
            }
        }
        return 0; // Return 0 if no data or no valid MCs
    } catch (error) {
        console.error("Error fetching MC data:", error);
        throw error;
    }
}

// Display Attendance Overview
function displayAttendanceOverview(data) {
    const attendance = data.attendance || {};

    // Update fields in attendance overview
    document.querySelector('#total-classes-attended').innerHTML = `<i class="fas fa-check-circle"></i> ${attendance.totalClassesAttended || 0}/40`;
    document.querySelector('#absences').innerHTML = `<i class="fas fa-times-circle"></i> ${attendance.absences || 0}`;
    document.querySelector('#upcoming-classes').innerHTML = `<i class="fas fa-calendar-alt"></i> ${attendance.upcomingClasses || 0}`;

    // Fetch and calculate dynamic MC submission count
    fetchMedicalCertificateCount(uid)
        .then(mcCount => {
            document.querySelector('#mc-submitted').innerHTML = `<i class="fas fa-file-medical"></i> ${mcCount}`;
        })
        .catch(error => {
            console.error("Error fetching MC submission count:", error);
        });

}

// Display Medical Certificates
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

                // Convert to an array and sort by date in descending order
                const sortedMC = Object.entries(submittedMC).sort((a, b) => {
                    return new Date(b[1].submittedDate) - new Date(a[1].submittedDate);
                });

                // Render sorted data
                sortedMC.forEach(([mcKey, mcDetails]) => {
                    if (mcDetails.status) {
                        // Create a row for each MC
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${mcDetails.reason}</td>
                            <td><a href="${mcDetails.file}" target="_blank">View File</a></td>
                            <td>${mcDetails.status}</td>
                            <td>${mcDetails.submittedDate}</td>
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
