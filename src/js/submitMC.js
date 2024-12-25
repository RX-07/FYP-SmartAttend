import { auth, db, doc, getDoc, setDoc, uploadBytes, getDownloadURL, ref, storage } from './FirebaseConfig.js';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

toastr.options.positionClass = 'toast-bottom-right'; 

let uid; 

auth.onAuthStateChanged((authUser) => {
    if (authUser) {
        uid = authUser.uid;
    } else {
        console.log('No user is currently logged in');
    }
});

export async function submitMC(event) {
    event.preventDefault();

    const fileInput = document.getElementById('file');
    const reason = document.getElementById('reason').value.trim();
    const note = document.getElementById('note').value.trim();
    const file = fileInput.files[0];

    if (!file || !reason || !uid) {
        toastr.warning("Please upload a file and provide a reason for your sick leave.");
        return;
    }

    const mcDocRef = doc(db, "MC", uid);        

    try {
        // Fetch existing MC data to determine the current count
        const mcDoc = await getDoc(mcDocRef);
        let mcNumber = 1; // Default to 1 if no MCs exist yet

        if (mcDoc.exists()) {
            const submittedMC = mcDoc.data().submittedMC || {};
            const existingKeys = Object.keys(submittedMC);

            // Find the highest mc number in the existing keys
            existingKeys.forEach((key) => {
                const match = key.match(/^MC(\d+)$/); // Match the pattern "mc + number"
                if (match) {
                    const num = parseInt(match[1]);
                    if (num >= mcNumber) mcNumber = num + 1; // Increment to the next number
                }
            });
        }

        const mcKey = `MC${mcNumber}`; // New key for this submission
        const fileRef = ref(storage, `mc/${uid}/${file.name}`);
        await uploadBytes(fileRef, file);

        const fileURL = await getDownloadURL(fileRef);

        const now = new Date();
        const formattedDate = `${now.getDate().toString().padStart(2, '0')}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getFullYear()}`;

        // Save the new MC record
        await setDoc(mcDocRef, {
            submittedMC: {
                [mcKey]: {
                    file: fileURL,
                    reason: reason,
                    note: note,
                    status: "Pending",
                    submittedDate: formattedDate
                }
            }
        }, { merge: true }); // Merge ensures existing data is not overwritten

        toastr.success("Medical Certificate submitted successfully!");
        document.getElementById('mcForm').reset();
    } catch (error) {
        console.error("Error submitting Medical Certificate:", error);
        toastr.error("Failed to submit Medical Certificate. Please try again.");
    }
}

document.getElementById('mcForm').addEventListener('submit', submitMC);