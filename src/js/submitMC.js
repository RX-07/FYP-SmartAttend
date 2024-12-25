import { auth, db, storage, doc, ref, uploadBytes, getDownloadURL, updateDoc } from './FirebaseConfig.js';

auth.onAuthStateChanged((authUser) => {
    if (authUser) {
        uid = authUser.uid;
        fetchEnrolledSubjects(uid); 
    } else {
        console.log('No user is currently logged in');
    }
});

// Function to handle form submission and add medical certificate data to the "medicalCertificates" map
const handleFormSubmit = async (event) => {
    event.preventDefault();

    const fileInput = document.getElementById('file');
    const reasonInput = document.getElementById('reason');
    const noteInput = document.getElementById('note');

    if (!fileInput.files.length) {
        alert('Please select a file to upload.');
        return;
    }

    const file = fileInput.files[0];
    const reason = reasonInput.value;
    const note = noteInput.value;

    try {
        const uid = auth.currentUser.uid;  // Get the logged-in user's UID

        // Step 1: Reference the user's document in the "Students" collection
        const mcDocRef = doc(db, "MC", uid);

        // Step 2: Upload the file to Firebase Storage
        const fileName = `${uid}_medical_certificate_${Date.now()}`;
        const storageRef = ref(storage, `mc/${fileName}`);

        // Upload the file
        const uploadResult = await uploadBytes(storageRef, file);  // Use uploadBytes for direct upload

        // Step 3: Get the file URL after the upload completes
        const fileURL = await getDownloadURL(uploadResult.ref);

        // Step 4: Prepare the medical certificate data (map)
        const currentDate = new Date().toString();  // Use ISO string for unique key

        // Step 5: Update the "medicalCertificates" map in the user's document
        await updateDoc(mcDocRef, {
            [currentDate]: {
                file: fileURL,
                reason: reason,
                note: note,
                status: "Pending"
            }
        });
    } catch (error) {
        console.error("Error submitting MC:", error);
        alert("An error occurred while submitting the Medical Certificate. Please try again.");
    }
};

// Add event listener to the form
document.getElementById('mcForm').addEventListener('submit', handleFormSubmit);