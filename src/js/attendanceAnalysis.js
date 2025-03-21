import { auth, db, doc, getDoc, getDocs, collection } from './FirebaseConfig.js';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

toastr.options.positionClass = 'toast-bottom-right';

const ctx = document.getElementById("studentChart").getContext("2d");
const monthSelector = document.getElementById("months");
let studentChartInstance = null;

export async function fetchSubjects(uid) {
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

export async function fetchPunctualityData(subjectId, selectedMonth, uid) {
    try {
        const classesRef = collection(db, "Subjects", subjectId, "Classes");
        const snapshot = await getDocs(classesRef);

        let totalLateMinutes = 0;
        let lateCheckIns = 0;

        snapshot.forEach(doc => {
            const classData = doc.data();
            const timeSlot = classData.timeSlot;
            const attendanceData = classData.attendance || {};
            const classDate = classData.classDate;

            const parseMonthStr = parseInt(classDate.split("-")[1]);
            if (parseMonthStr !== selectedMonth || !timeSlot) return;

            const [day, timeRange] = timeSlot.split('_');
            const [startTime] = timeRange.split('-');

            const parseTime = (timeStr) => {
                const timeParts = timeStr.match(/(\d+)(AM|PM|am|pm)/);
                if (timeParts) {
                    let hour = parseInt(timeParts[1]);
                    let period = timeParts[2].toUpperCase(); 

                    if (period === 'PM' && hour < 12) hour += 12;
                    if (period === 'AM' && hour === 12) hour = 0;
                    return hour;
                }
                return null;
            };

            const classStartHours = parseTime(startTime);
            if (classStartHours === null) return;

            const classStartTime = new Date();
            classStartTime.setHours(classStartHours, 0, 0);

            if (attendanceData[uid] && attendanceData[uid].checkInTime) {
                const [time, rawPeriod] = attendanceData[uid].checkInTime.split(" ");
                const period = rawPeriod.toUpperCase(); 
                const [hours, minutes] = time.split(":").map(Number);

                let checkInHours = period === "PM" && hours !== 12 ? hours + 12 : hours;
                checkInHours = period === "AM" && hours === 12 ? 0 : checkInHours;

                const checkInDate = new Date();
                checkInDate.setHours(checkInHours, minutes, 0);

                if (checkInDate > classStartTime) {
                    let lateness = (checkInDate - classStartTime) / (1000 * 60);
                    totalLateMinutes += lateness;
                    lateCheckIns++;
                }
            }
        });

        return { avgLateness: lateCheckIns > 0 ? totalLateMinutes / lateCheckIns : 0 };
    } catch (error) {
        console.error("Error fetching punctuality data:", error);
        return { avgLateness: 0 };
    }
}

export async function renderChart(uid, selectedMonth) {
    const enrolledSubjects = await fetchSubjects(uid);
    const subjectLabelsContainer = document.getElementById("subjectLabels");

    subjectLabelsContainer.innerHTML = `<div class="text-center"><div class="spinner-border text-primary" role="status"></div><p>Loading Attendance Data...</p></div>`;

    if (!enrolledSubjects || enrolledSubjects.length === 0) {
        console.error("No enrolled subjects found.");
        subjectLabelsContainer.innerHTML = "<p>No enrolled subjects.</p>";
        return;
    }

    let subjectNames = [];
    let latenessData = [];

    for (const subject of enrolledSubjects) {
        const { avgLateness } = await fetchPunctualityData(subject.id, selectedMonth, uid);
        subjectNames.push(`${subject.id}`);
        latenessData.push(avgLateness.toFixed(2));
    }

    if (latenessData.length === 0) {
        console.warn("No attendance records found.");
        return;
    }

    subjectLabelsContainer.innerHTML = "";

    if (studentChartInstance) {
        studentChartInstance.destroy();
    }

    studentChartInstance = new Chart(ctx, {
        type: "line",
        data: {
            labels: subjectNames,
            datasets: [
                {
                    label: "Average Lateness (Minutes)",
                    data: latenessData,
                    backgroundColor: "#dc3545",
                }
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Average Lateness (Minutes)",
                        font: { 
                            size: window.innerWidth < 768 ? 10 : 16, 
                            weight: "bold" 
                        }
                    },
                    ticks: {
                        font: {
                            size: window.innerWidth < 768 ? 10 : 14 
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: "Subjects",
                        font: { 
                            size: window.innerWidth < 768 ? 10 : 16, 
                            weight: "bold" 
                        }
                    },
                    ticks: {
                        font: {
                            size: window.innerWidth < 768 ? 10 : 14 
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: window.innerWidth < 768 ? 10 : 14 
                        }
                    }
                }
            }
        }
    });
}

monthSelector.addEventListener("change", function () {
    const selectedMonth = parseInt(this.value);
    auth.onAuthStateChanged(user => {
        if (user) renderChart(user.uid, selectedMonth);
    });
});

function init() {
    auth.onAuthStateChanged(async (authUser) => {
        if (authUser) {
            const uid = authUser.uid;
            const currentMonth = new Date().getMonth() + 1;
            monthSelector.value = currentMonth;
            renderChart(uid, currentMonth);
        } else {
            toastr.info('No user is currently logged in');
        }
    });
}

init();