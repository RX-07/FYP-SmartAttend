document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.getElementById("quizContainer");
    const saveQuizBtn = document.getElementById("saveQuizBtn");
    const weekDropdown = document.getElementById("weekDropdown");
    const quizSummary = document.querySelector("#quizSummary tbody");

    // Extract subjectID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const subjectID = urlParams.get("subject") || "Unknown Subject";
    document.getElementById("pageTitle").textContent = `Manage Quiz Topic - ${subjectID}`;

    // Populate weeks dropdown
    function populateWeeks() {
        const totalWeeks = 13; // Long semester (Modify if needed)
        for (let i = 1; i <= totalWeeks; i++) {
            const option = document.createElement("option");
            option.value = `Week ${i}`;
            option.textContent = `Week ${i}`;
            weekDropdown.appendChild(option);
        }
    }
    populateWeeks();

    // Handle week selection
    weekDropdown.addEventListener("change", function () {
        const selectedWeek = weekDropdown.value;
        loadQuizTopic(selectedWeek);
    });

    // Load quiz topic input field
    function loadQuizTopic(week) {
        quizContainer.innerHTML = "";
        const quizTopic = document.createElement("div");
        quizTopic.classList.add("quiz-topic");

        quizTopic.innerHTML = `
            <input type="text" placeholder="Enter quiz topic for ${week}">
            <i class="fas fa-trash-alt icon delete-icon"></i>
        `;

        // Delete topic functionality
        quizTopic.querySelector(".delete-icon").addEventListener("click", function () {
            quizTopic.querySelector("input").value = "";
            removeQuizTopic(week);
        });

        quizContainer.appendChild(quizTopic);
    }

    // Save quiz topic
    saveQuizBtn.addEventListener("click", function () {
        const selectedWeek = weekDropdown.value;
        if (!selectedWeek) {
            toastr.warning("Please select a week.");
            return;
        }

        const quizTopicInput = quizContainer.querySelector("input");
        const quizTopic = quizTopicInput ? quizTopicInput.value.trim() : "";

        if (!quizTopic) {
            toastr.error("Please enter a quiz topic.");
            return;
        }

        updateQuizSummary(selectedWeek, quizTopic);
        toastr.success(`Quiz topic for ${selectedWeek} saved successfully!`);
    });

    // Update summary table
    function updateQuizSummary(week, topic) {
        let existingRow = document.querySelector(`#quizSummary tbody tr[data-week="${week}"]`);
        if (existingRow) {
            existingRow.cells[1].textContent = topic;
        } else {
            const row = quizSummary.insertRow();
            row.setAttribute("data-week", week);
            row.innerHTML = `<td>${week}</td><td>${topic}</td>`;
        }
    }

    // Remove quiz topic from summary table
    function removeQuizTopic(week) {
        let row = document.querySelector(`#quizSummary tbody tr[data-week="${week}"]`);
        if (row) row.remove();
    }
});
