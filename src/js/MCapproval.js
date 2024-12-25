import { db, doc, updateDoc, getFirestore, collection, onSnapshot, getDoc } from './FirebaseConfig.js';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

toastr.options.positionClass = 'toast-bottom-right';

// Fetch and display submitted medical certificates
export function fetchSubmittedMC() {
    const mcCollection = collection(db, "MC");

    onSnapshot(mcCollection, async (snapshot) => {
        const tbody = document.querySelector('.approval-table tbody');
        tbody.innerHTML = ''; // Clear table

        for (const mcDoc of snapshot.docs) {
            const mcData = mcDoc.data();
            const mcID = mcDoc.id; // Document ID (User ID)
        
            if (mcData.submittedMC) {
                const submittedMC = mcData.submittedMC;
        
                for (const [mcKey, mcDetails] of Object.entries(submittedMC)) {
                    if (mcDetails.status === "Pending") {
                        // Fetch student details
                        const studentDocRef = doc(db, "Students", mcID);
                        const studentDoc = await getDoc(studentDocRef);
        
                        let studentID = '';
                        if (studentDoc.exists()) {
                            studentID = studentDoc.data().studentID;
                        }
        
                        // Fetch the file URL from Firestore data
                        const fileURL = mcDetails.file; // Use the file URL stored in Firestore
        
                        // Create a row for each pending MC
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${studentID}</td>
                            <td>${mcDetails.reason}</td>
                            <td><a href="${fileURL}" target="_blank">View File</a></td>
                            <td>${mcDetails.submittedDate}</td>
                            <td>
                                <div class="button-container">
                                    <button class="approve-button" data-mc-id="${mcID}" data-mc-key="${mcKey}">Approve</button>
                                    <button class="reject-button" data-mc-id="${mcID}" data-mc-key="${mcKey}">Reject</button>
                                </div>
                            </td>
                        `;
                        tbody.appendChild(row);
                    }
                }
            }
        }

        // Add event listeners for approve/reject buttons
        document.querySelectorAll('.approve-button').forEach(button => {
            button.addEventListener('click', handleApprove);
        });

        document.querySelectorAll('.reject-button').forEach(button => {
            button.addEventListener('click', handleReject);
        });
    }, (error) => {
        console.error("Error listening to changes:", error);
    });
}

// Handle approval of a medical certificate
export async function handleApprove(event) {
    const mcID = event.target.getAttribute('data-mc-id');
    const mcKey = event.target.getAttribute('data-mc-key');

    if (mcID && mcKey) {
        const mcDocRef = doc(db, "MC", mcID);

        try {
            // Update the status of the specific MC
            await updateDoc(mcDocRef, {
                [`submittedMC.${mcKey}.status`]: "Approved"
            });
            toastr.success("Medical Certificate approved!");
        } catch (error) {
            console.error("Error updating document: ", error);
            toastr.warning("Failed to approve Medical Certificate. Please try again.");
        }
    }
}

// Handle rejection of a medical certificate
export async function handleReject(event) {
    const mcID = event.target.getAttribute('data-mc-id');
    const mcKey = event.target.getAttribute('data-mc-key');

    if (mcID && mcKey) {
        const mcDocRef = doc(db, "MC", mcID);

        try {
            // Update the status of the specific MC
            await updateDoc(mcDocRef, {
                [`submittedMC.${mcKey}.status`]: "Rejected"
            });
            toastr.success("Medical Certificate rejected!");
        } catch (error) {
            console.error("Error updating document: ", error);
            toastr.warning("Failed to reject Medical Certificate. Please try again.");
        }
    }
}

fetchSubmittedMC();