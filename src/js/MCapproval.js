import { getFirestore, collection, onSnapshot, doc, updateDoc, getDoc } from './FirebaseConfig.js';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

toastr.options.positionClass = 'toast-bottom-right'; 

const db = getFirestore();

export function fetchSubmittedMC() {
    const mcCollection = collection(db, "MC");

    onSnapshot(mcCollection, async (snapshot) => {
        const tbody = document.querySelector('.approval-table tbody');
        tbody.innerHTML = ''; // Clear table

        for (const mcDoc of snapshot.docs) {
            const mcData = mcDoc.data();
            const mcID = mcDoc.id; // Get the document ID (MC ID)

            if (mcData.status === "pending") {

                const studentDocRef = doc(db, "Students", mcID);
                const studentDoc = await getDoc(studentDocRef);

                let studentID = '';
                if (studentDoc.exists()) {
                    studentID = studentDoc.data().studentID;
                }

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${studentID}</td>
                    <td>${mcData.reason}</td>
                    <td>${mcData.note || 'N/A'}</td>
                    <td>${mcData.submitted_date.toDate().toLocaleString()}</td>
                    <td>
                        <div class="button-container">
                            <button class="approve-button" data-mc-id="${mcID}">Approve</button>
                            <button class="reject-button" data-mc-id="${mcID}">Reject</button>
                        </div>
                    </td>
                `;
                tbody.appendChild(row);
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

// Function to handle the approval of MC
export async function handleApprove(event) {
    const mcID = event.target.getAttribute('data-mc-id');

    if (mcID) {
        const mcDocRef = doc(db, "MC", mcID);

        try {
            // Update the status of the MC document in Firestore
            await updateDoc(mcDocRef, {
                status: "approved"
            });
            toastr.success("Medical Certificate approved!");
        } catch (error) {
            console.error("Error updating document: ", error);
            toastr.warning("Failed to approve Medical Certificate. Please try again.");
        }
    }
}

// Function to handle the rejection of MC
export async function handleReject(event) {
    const mcID = event.target.getAttribute('data-mc-id');

    if (mcID) {
        const mcDocRef = doc(db, "MC", mcID);

        try {
            // Update the status of the MC document in Firestore
            await updateDoc(mcDocRef, {
                status: "rejected"
            });
            toastr.success("Medical Certificate rejected!");
        } catch (error) {
            console.error("Error updating document: ", error);
            toastr.warning("Failed to reject Medical Certificate. Please try again.");
        }
    }
}

fetchSubmittedMC();