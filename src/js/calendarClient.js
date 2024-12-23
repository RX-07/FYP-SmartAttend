import { auth, db, doc, getDoc, updateDoc } from "./FirebaseConfig.js";

const baseUrl = "https://us-central1-smartattend-f36c4.cloudfunctions.net/calendar"; // Replace with your Cloud Function's URL

// Function to handle calendar URL generation and storage
async function handleCalendarUrl(uid) {
    try {
        const userDocRef = doc(db, "Students", uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            let calendarUrl = userDoc.data()?.calendarUrl;

            // Generate and store the calendar URL if it doesn't exist
            if (!calendarUrl) {
                calendarUrl = `${baseUrl}/${uid}`; // Unique URL for the user
                await updateDoc(userDocRef, { calendarUrl });
                console.log("Generated and stored calendar URL:", calendarUrl);
            } else {
                console.log("Existing calendar URL:", calendarUrl);
            }

            // Display the calendar URL to the user
            const calendarLinkElement = document.getElementById("calendar-link");
            calendarLinkElement.innerHTML = `<a href="${calendarUrl}" target="_blank">Subscribe to Calendar</a>`;
        } else {
            console.error("User document does not exist in Firestore.");
        }
    } catch (error) {
        console.error("Error handling calendar URL:", error);
    }
}

// Trigger calendar URL generation when the user logs in
auth.onAuthStateChanged(async (authUser) => {
    if (authUser) {
        const uid = authUser.uid;
        await handleCalendarUrl(uid);
    } else {
        console.log("No user is currently logged in");
    }
});
