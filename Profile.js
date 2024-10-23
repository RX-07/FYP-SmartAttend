// Load Header dynamically
fetch('Header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));

// Event listeners for Edit buttons (could be expanded for form handling)
document.querySelectorAll('.edit-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Edit button clicked');
    });
});
