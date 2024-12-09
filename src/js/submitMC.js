// submitMC.js
import { auth, db, storage, doc, setDoc, getDoc, ref, uploadBytes, getDownloadURL } from './FirebaseConfig.js';

// Function to create a document in the MC collection for the user UID
const createMCCollection = async (uid) => {
    try {
        // Create a reference to the MC document based on the UID
        const mcDocRef = doc(db, "MC", uid);  // Directly creating document in "MC" collection with UID as document ID

        const mcDocSnap = await getDoc(mcDocRef);
        if (!mcDocSnap.exists()) {
            // Create MC document if it doesn't exist
            await setDoc(mcDocRef, {
                submitted_date,
                file,
                reason,
                note,
                status
            });
            console.log("MC document created for user:", uid);
        } else {
            console.log("MC document already exists for user:", uid);
        }
    } catch (error) {
        console.error("Error creating/updating MC document:", error);
    }
};

// Function to handle form submission
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

        // Step 1: Create the MC document in the MC collection if not already created
        await createMCCollection(uid);

        // Step 2: Upload the file to Firebase Storage
        const fileName = `${uid}_medical_certificate${Date.now()}`;
        const storageRef = ref(storage, `mc/${fileName}`);
        
        // Upload the file without progress monitoring using uploadBytes
        const uploadResult = await uploadBytes(storageRef, file);  // Use uploadBytes for direct upload

        // Step 3: Get the file URL after the upload completes
        const fileURL = await getDownloadURL(uploadResult.ref);

        // Step 4: Update the Firestore document with file URL, reason, note, and the current date
        const mcDocRef = doc(db, "MC", uid);  // Referencing the MC document using the UID as document ID
        await setDoc(mcDocRef, {
            submitted_date: new Date(),
            file: fileURL,
            reason: reason,
            note: note,
            status: "pending" // Document status is pending until admin approval
        }, { merge: true });

        alert('Medical Certificate submitted successfully!');
    } catch (error) {
        console.error("Error submitting MC:", error);
        alert("An error occurred while submitting the Medical Certificate. Please try again.");
    }
};

// Add event listener to the form
document.getElementById('mcForm').addEventListener('submit', handleFormSubmit);
