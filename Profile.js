// Function to toggle edit mode
function toggleEditMode(section) {
    const formButtons = document.getElementById(`${section}-form-buttons`);
    const editButton = document.querySelector(`.edit-btn[data-section="${section}"]`);
    const inputs = document.querySelectorAll(`#${section}-input`);
    const paragraphs = document.querySelectorAll(`#${section}`);

    // Show/hide inputs and form buttons
    inputs.forEach(input => {
        input.style.display = input.style.display === "none" ? "block" : "none";
    });
    paragraphs.forEach(p => {
        p.style.display = p.style.display === "none" ? "block" : "none";
    });
    formButtons.style.display = formButtons.style.display === "none" ? "flex" : "none";
    editButton.style.display = editButton.style.display === "none" ? "block" : "none";
}

// Event listeners for Edit buttons
document.querySelectorAll('.edit-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const section = e.currentTarget.dataset.section;
        toggleEditMode(section);
    });
});

// Event listeners for Cancel buttons
document.querySelectorAll('.cancel-btn').forEach(button => {
    button.addEventListener('click', () => {
        window.location.reload(); // Reload the page to cancel changes
    });
});

// Event listeners for Save buttons
document.querySelectorAll('.submit-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default form submission

        const section = event.currentTarget.parentNode.id.split('-')[0]; // Get the section

        // Get the inputs and paragraphs
        const inputs = document.querySelectorAll(`#${section}-input`);
        const paragraphs = document.querySelectorAll(`#${section}`);

        // Update the paragraphs with input values
        inputs.forEach((input, index) => {
            paragraphs[index].textContent = input.value; // Update paragraph content
        });

        // Hide inputs and show updated paragraphs
        toggleEditMode(section);
    });
});
