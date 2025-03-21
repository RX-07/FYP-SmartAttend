import { db, auth, doc, getDoc, setDoc, collection, getDocs } from "./FirebaseConfig.js";

export async function fetchSubjects(uid) {
    try {
        const studentDoc = await getDoc(doc(db, "Students", uid));
        if (!studentDoc.exists()) return [];

        const enrolledSubjects = studentDoc.data().enrolledSubjects || {};
        return Object.entries(enrolledSubjects)
            .filter(([_, subjectData]) => subjectData.status === "Enrolled")
            .map(([subjectId, subjectData]) => ({
                id: subjectId,
                ...subjectData
            }));
    } catch (error) {
        console.error("Error fetching subjects:", error);
        return [];
    }
}

function parseTime(timeString) {
    if (!timeString) return null;
    
    const [time, modifier] = timeString.trim().toUpperCase().split(" ");
    if (!time || !modifier) return null;

    let [hours, minutes] = time.split(":").map(Number);
    if (isNaN(hours) || isNaN(minutes)) return null;

    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    return new Date(0, 0, 0, hours, minutes, 0);
}

function getClassStartTime(timeSlot) {
    const match = timeSlot.match(/(\d{1,2})(AM|PM)/);
    return match ? parseTime(`${match[1]}:00 ${match[2]}`) : null;
}

async function fetchPastAttendance(subjectId, uid) {
    try {
        const classCollectionRef = collection(db, `Subjects/${subjectId}/Classes`);
        const classDocs = await getDocs(classCollectionRef);

        let pastRecords = [];
        classDocs.forEach((doc) => {
            const classData = doc.data();
            if (classData.attendance && classData.attendance[uid]) {
                pastRecords.push({
                    subjectId,
                    classDate: classData.classDate,
                    week: classData.week,
                    timeSlot: classData.timeSlot,
                    checkInTime: classData.attendance[uid].checkInTime
                });
            }
        });

        return pastRecords;
    } catch (error) {
        console.error("Error fetching past attendance:", error);
        return [];
    }
}

export async function fetchAndSaveAllAttendance() {
    const uid = auth.currentUser.uid;
    try {
        const subjects = await fetchSubjects(uid);
        if (!subjects.length) {
            console.warn("No enrolled subjects found.");
            return;
        }

        let allAttendanceRecords = [];

        for (const subject of subjects) {
            const subjectAttendance = await fetchPastAttendance(subject.id, uid);
            allAttendanceRecords.push(...subjectAttendance);
        }

        if (allAttendanceRecords.length > 0) {
            await savePunctualityData(uid, allAttendanceRecords);
        } else {
            console.log("No attendance records found.");
        }
    } catch (error) {
        console.error("Error fetching attendance:", error);
    }
}

async function savePunctualityData(uid, attendanceRecords) {
    try {
        const punctualityRef = doc(db, "Attendance_punctuality", uid);
        const punctualitySnapshot = await getDoc(punctualityRef);

        let existingData = punctualitySnapshot.exists()
            ? punctualitySnapshot.data()
            : {
                attendanceRecords: [],
                totalClassesAttended: 0,
                totalClassesLate: 0,
                averageLateness: 0,
                punctualityRate: 100,
                lastUpdated: new Date().toISOString()
            };

        const existingRecordsSet = new Set(existingData.attendanceRecords.map(record => `${record.subjectId}_${record.classDate}`));
        attendanceRecords = attendanceRecords.filter(record => !existingRecordsSet.has(`${record.subjectId}_${record.classDate}`));

        if (attendanceRecords.length === 0) {
            console.log("No new attendance records to save.");
            return;
        }

        existingData.attendanceRecords.push(...attendanceRecords);

        existingData.attendanceRecords.forEach(record => {
            const classStartTime = getClassStartTime(record.timeSlot);
            const checkInDateTime = parseTime(record.checkInTime);
            
            if (!classStartTime || !checkInDateTime) {
                console.error(`Invalid time for record:`, record);
                return;
            }
        
            record.latenessMinutes = Math.max((checkInDateTime - classStartTime) / (1000 * 60), 0);
        });

        existingData.totalClassesAttended = existingData.attendanceRecords.length;
        existingData.totalClassesLate = existingData.attendanceRecords.filter(r => r.latenessMinutes > 0).length;
        existingData.averageLateness = existingData.attendanceRecords.reduce((sum, r) => sum + r.latenessMinutes, 0) / existingData.totalClassesAttended || 0;
        existingData.punctualityRate = ((existingData.totalClassesAttended - existingData.totalClassesLate) / existingData.totalClassesAttended) * 100;
        existingData.lastUpdated = new Date().toISOString();

        await setDoc(punctualityRef, existingData);
        console.log("Punctuality data saved successfully!");

    } catch (error) {
        console.error("Error saving punctuality data:", error);
    }
}
