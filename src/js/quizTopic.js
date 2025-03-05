import { db, doc, getDoc, setDoc, updateDoc, collection, getDocs } from "./FirebaseConfig.js";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { generateAndStoreQuiz } from "./AIQuiz.js";

toastr.options.positionClass = "toast-bottom-right";

export async function openModal(subjectId) {
    const modal = document.getElementById("topic-modal");
    let totalWeeks = await getTotalWeeks(subjectId);

    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h4 id="modal-subject-title" class="modal-title">Manage Quiz for <span>${subjectId}</span></h4>
                
                <div class="form-group">
                    <label for="week-select" class="modal-label">Select Week:</label>
                    <select id="week-select" class="form-control custom-select">
                        <option value="">Select Week</option>
                        ${Array.from({ length: totalWeeks }, (_, i) => `<option value="${i + 1}">Week ${i + 1}</option>`).join("")}
                    </select>
                </div>

                <div class="form-group">
                    <label for="topic-input" class="modal-label">Topic:</label>
                    <input type="text" id="topic-input" class="form-control custom-input" placeholder="Enter quiz topic" />
                </div>

                <button id="save-topic-btn" class="btn btn-primary modern-btn mt-2">Save Topic</button>

                <h5 class="modal-subtitle mt-3">Quiz Summary:</h5>
                <div id="quiz-summary" class="quiz-summary-box">
                    <p class="text-muted">Select a week to see the quiz summary.</p>
                </div>
            </div>
        </div>
    `;

    const weekSelect = document.getElementById("week-select");
    const topicInput = document.getElementById("topic-input");
    const saveBtn = document.getElementById("save-topic-btn");
    const quizSummary = document.getElementById("quiz-summary");
    const closeModal = document.getElementsByClassName("close")[0];

    modal.style.display = "flex";

    // Load quiz summary when week is selected
    weekSelect.addEventListener("change", async () => {
        const selectedWeek = weekSelect.value;
        if (selectedWeek) {
            await loadQuizSummary(subjectId, selectedWeek, topicInput);
        }
    });

    // Save topic button
    saveBtn.onclick = async () => {
        const selectedWeek = weekSelect.value;
        const topic = topicInput.value.trim();
        await saveQuizTopic(subjectId, selectedWeek, topic);
    };

    // Close modal events
    closeModal.onclick = () => (modal.style.display = "none");
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

async function getTotalWeeks(subjectId) {
    try {
        const classesCollectionRef = collection(db, "Subjects", subjectId, "Classes");
        const querySnapshot = await getDocs(classesCollectionRef);

        return querySnapshot.size;
    } catch (error) {
        console.error("Error fetching total weeks:", error);
        return 14; // Default fallback
    }
}

async function loadQuizSummary(subjectId, week, topicInput) {
    const quizSummary = document.getElementById("quiz-summary");
    quizSummary.innerHTML = '<p class="text-muted">Loading quiz summary...</p>';

    try {
        const quizRef = doc(db, "Quiz", subjectId);
        const quizSnap = await getDoc(quizRef);

        if (quizSnap.exists()) {
            const quizData = quizSnap.data();
            const weekKey = `Week ${week}`; 
            const weekData = quizData[weekKey];

            if (weekData) {
                topicInput.value = weekData.topic || "";

                quizSummary.innerHTML = `
                    <p><strong>Topic:</strong> ${weekData.topic || "No topic set"}</p>
                    <h5>Generated Questions:</h5>
                    <ul>
                        ${
                            Array.isArray(weekData.questions)
                                ? weekData.questions
                                    .map(
                                        (q, index) => `
                                            <li>
                                                <strong>Q${index + 1}:</strong> ${q.question} 
                                                <br> 
                                                <strong>Options:</strong>
                                                <ul>
                                                    ${q.options
                                                        .map(
                                                            (option, i) =>
                                                                `<li>${String.fromCharCode(65 + i)}. ${option}</li>`
                                                        )
                                                        .join("")}
                                                </ul>
                                                <strong>Answer:</strong> ${q.answer}
                                            </li>
                                            <hr> <!-- Line break after each question -->
                                        `
                                    )
                                    .join("")
                                : "<p class='text-muted'>No questions generated yet.</p>"
                        }
                    </ul>
                `;
            } else {
                quizSummary.innerHTML = '<p class="text-muted">No quiz data available for this week.</p>';
                topicInput.value = "";
            }
        } else {
            quizSummary.innerHTML = '<p class="text-muted">No quiz data found.</p>';
            topicInput.value = "";
        }
    } catch (error) {
        console.error("Error loading quiz summary:", error);
        quizSummary.innerHTML = '<p class="text-danger">Failed to load quiz summary.</p>';
    }
}

// Save quiz topic to Firestore
async function saveQuizTopic(subjectId, selectedWeek, topic) {
    if (!selectedWeek) {
        toastr.error("Please select a week.");
        return;
    }
    if (!topic) {
        toastr.error("Please enter a topic.");
        return;
    }

    try {
        const quizRef = doc(db, "Quiz", subjectId);
        const quizSnap = await getDoc(quizRef);
        const weekKey = `Week ${selectedWeek}`;

        if (!quizSnap.exists()) {
            // Create document if it doesn't exist
            await setDoc(quizRef, {
                [weekKey]: { topic: topic }
            });
        } else {
            // Update existing document
            await updateDoc(quizRef, {
                [`${weekKey}.topic`]: topic
            });
        }

        toastr.success("Quiz topic saved successfully!");
        await generateAndStoreQuiz(subjectId, weekKey, topic);
        await loadQuizSummary(subjectId, selectedWeek, document.getElementById("topic-input"));
    } catch (error) {
        console.error("Error saving topic:", error);
        toastr.error("Failed to save quiz topic.");
    }
}
