import express from "express";
import ical from "ical-generator";
import moment from "moment";
import admin from "firebase-admin";

// Initialize Firebase Admin SDK
const serviceAccount = require("./path-to-your-service-account.json"); // Replace with your service account key
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

const app = express();
const port = 3000; // Replace with your desired port

// Helper function to convert timeSlot and classDate to start and end times
function getStartEndTime(timeSlot, classDate) {
    const [day, timeRange] = timeSlot.split("_");
    const [startTime, endTime] = timeRange.split(" - ");

    const startDate = moment(classDate, "YYYY-MM-DD");
    const startHour = moment(startTime, "hA").format("HH:mm");
    const endHour = moment(endTime, "hA").format("HH:mm");

    const startMoment = startDate.clone().set({
        hour: parseInt(startHour.split(":")[0]),
        minute: parseInt(startHour.split(":")[1]),
    });

    const endMoment = startDate.clone().set({
        hour: parseInt(endHour.split(":")[0]),
        minute: parseInt(endHour.split(":")[1]),
    });

    return {
        start: startMoment.toDate(),
        end: endMoment.toDate(),
    };
}

// API endpoint to generate the calendar
app.get("/calendar/:uid", async (req, res) => {
    const { uid } = req.params;

    try {
        // Fetch the user's enrolled subjects from Firestore
        const userDocRef = db.collection("Students").doc(uid);
        const userDoc = await userDocRef.get();

        if (!userDoc.exists) {
            return res.status(404).send("User not found");
        }

        const enrolledSubjects = userDoc.data()?.enrolledSubjects || {};
        const calendar = ical({ name: "Class Schedule" });

        // Loop through each enrolled subject
        for (const [subjectKey, subject] of Object.entries(enrolledSubjects)) {
            if (subject.status !== "Enrolled") continue;

            const subjectRef = db.collection("Subjects").doc(subjectKey).collection("Classes");
            const classesSnapshot = await subjectRef.get();

            classesSnapshot.forEach((classDoc) => {
                const classData = classDoc.data();
                const { timeSlot, classDate, week, venue } = classData;

                const { start, end } = getStartEndTime(timeSlot, classDate);

                calendar.createEvent({
                    start: start,
                    end: end,
                    summary: `Lecture & Tutorial ${subjectKey}`,
                    description: `Week ${week}, Date: ${classDate}`,
                    location: `${venue}`,
                    alarms: [
                        {
                            type: "display",
                            trigger: 60 * 15, // 15 minutes before the event
                            description: `${subjectKey} class is starting soon!`,
                        },
                    ],
                });
            });
        }

        // Send the calendar as a response
        res.setHeader("Content-Type", "text/calendar");
        res.send(calendar.toString());
    } catch (error) {
        console.error("Error generating calendar:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
