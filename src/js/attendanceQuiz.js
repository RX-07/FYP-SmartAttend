import { db, doc, getDoc, updateDoc, auth } from "./FirebaseConfig.js";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

toastr.options.positionClass = "toast-bottom-right";

let uid = "";

const answers = {};

auth.onAuthStateChanged(async (authUser) => {
    if (authUser) {
        uid = authUser.uid;
    } else {
        toastr.info("No user is currently logged in");
    }
});

export async function fetchQuiz(subjectId, classId, callback) {
    try {
        const weekNumber = await extractWeekFromClassId(subjectId, classId);
        if (!weekNumber) {
            toastr.warning("Week information is missing.");
            return;
        }

        const quizRef = doc(db, "Quiz", subjectId);
        const quizDoc = await getDoc(quizRef);

        if (quizDoc.exists()) {
            const quizData = quizDoc.data()[`Week ${weekNumber}`];

            if (quizData) {
                displayQuizModal(quizData, subjectId, classId, uid, callback);
            } else {
                toastr.warning("No quiz available for this week.");
            }
        } else {
            toastr.warning("No quiz found for this subject.");
        }
    } catch (error) {
        console.error("Error fetching quiz:", error);
        toastr.warning("Failed to fetch quiz. Please try again.");
    }
}

async function extractWeekFromClassId(subjectId, classId) {
    try {
        const weekRef = doc(db, `Subjects/${subjectId}/Classes/${classId}`);
        const classDoc = await getDoc(weekRef);

        if (classDoc.exists()) {
            return classDoc.data().week || null;
        } else {
            console.error("Class document not found:", classId);
            return null;
        }
    } catch (error) {
        console.error("Error fetching week number:", error);
        return null;
    }
}

export async function displayQuizModal(quizData, subjectId, classId, uid, callback) {

    if (!uid) {
        toastr.error("User is not authenticated.");
        return;
    }

    const weekRef = doc(db, `Subjects/${subjectId}/Classes/${classId}`);
    const classSnapshot = await getDoc(weekRef);

    let weekNumber = "Unknown";
    if (classSnapshot.exists()) {
        weekNumber = classSnapshot.data().week;
    }

    const existingModal = document.getElementById("quiz-modal");
    if (existingModal) existingModal.remove();

    const modal = document.createElement("div");
    modal.id = "quiz-modal";
    modal.classList.add("modal-overlay");

    const questions = quizData.questions;

    if (!questions || !Array.isArray(questions) || questions.length === 0) {
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h4 class="modal-title">Quiz for <span>${subjectId} - Week ${weekNumber}</span></h4>
                <p class="text-muted">No quiz available for this week.</p>
            </div>
        `;
        document.body.appendChild(modal);
        modal.style.display = "flex";

        modal.querySelector(".close").onclick = () => modal.remove();
        return;
    }

    let currentQuestionIndex = 0;

    function renderQuestion(index) {
        const question = questions[index];
        const optionLabels = ['A', 'B', 'C', 'D'];
    
        return `
            <div class="quiz-question fade-in">
                <p><strong>Q${index + 1}:</strong> ${question.question}</p>
                <div class="quiz-options">
                    ${Array.isArray(question.options) ? question.options
                        .map((option, i) => `
                            <label class="quiz-option">
                                <input type="radio" name="question${index}" value="${option}">
                                <span><strong>${optionLabels[i]}.</strong> ${option}</span>
                            </label>
                        `).join("") : "<p class='text-muted'>No answers available.</p>"}
                </div>
            </div>
        `;
    }
    

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h4 class="modal-title">Quiz for <span>${subjectId} - Week ${weekNumber}</span></h4>

            <div class="progress-bar">
                <div class="progress"></div>
            </div>

            <div id="quiz-container">
                ${renderQuestion(currentQuestionIndex)}
            </div>

            <div class="quiz-controls">
                <button id="prevQuestion" class="btn modern-btn" disabled>Previous</button>
                <button id="nextQuestion" class="btn modern-btn">Next</button>
                <button id="submitQuizButton" class="btn modern-btn" style="display: none;">Submit</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = "flex";

    const quizContainer = document.getElementById("quiz-container");
    const progressBar = modal.querySelector(".progress");
    const nextButton = document.getElementById("nextQuestion");
    const prevButton = document.getElementById("prevQuestion");
    const submitButton = document.getElementById("submitQuizButton");

    function updateQuizUI() {
        quizContainer.innerHTML = renderQuestion(currentQuestionIndex);
        progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    
        prevButton.disabled = currentQuestionIndex === 0;
    
        if (currentQuestionIndex === questions.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }

    nextButton.onclick = () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            updateQuizUI();
        }
    };

    prevButton.onclick = () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            updateQuizUI();
        }
    };

    submitButton.onclick = async () => {
        modal.style.display = "none";
        const score = await calculateScore(quizData);
        await saveQuizResult(subjectId, classId, score, uid);

        if (typeof callback === "function") {
            callback();
        }
    };

    document.addEventListener("change", (event) => {
        if (event.target.type === "radio") {
            const questionIndex = event.target.name.replace("question", ""); 
            answers[questionIndex] = event.target.value;
        }
    });
    
    modal.querySelector(".close").onclick = () => modal.remove();
    window.onclick = (event) => {
        if (event.target === modal) modal.remove();
    };
}

async function calculateScore(quiz) {    
    if (!quiz.questions || !Array.isArray(quiz.questions)) {
        console.error("Quiz questions are missing.");
        return 0;
    }

    let score = 0;
    let unanswered = 0;

    quiz.questions.forEach((question, index) => {
        const selected = answers[index];

        if (!selected) {
            unanswered++;
        } else if (selected === question.answer) {
            score++;
        }
    });

    if (unanswered > 0) {
        toastr.warning(`You left ${unanswered} question(s) unanswered.`);
    }
    
    return score;
}

async function saveQuizResult(subjectId, classId, score, uid) {
    try {
        if (!uid) {
            toastr.error("User not authenticated. Cannot save results.");
            return;
        }

        const attendanceRef = doc(db, `Subjects/${subjectId}/Classes/${classId}`);
        const classDoc = await getDoc(attendanceRef);

        if (classDoc.exists()) {
            const attendanceData = classDoc.data().attendance || {};
            attendanceData[uid] = {
                ...attendanceData[uid],
                quiz: { score, completed: true }
            };

            await updateDoc(attendanceRef, { attendance: attendanceData });
            toastr.success(`Attendance confirmed for Subject: ${subjectId}`);
        } else {
            toastr.error("Class not found.");
        }
    } catch (error) {
        console.error("Error saving quiz result:", error);
        toastr.error("Failed to save quiz result. Please try again.");
    }
}