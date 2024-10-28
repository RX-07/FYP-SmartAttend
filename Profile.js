document.getElementById('file-upload').addEventListener('change', function (event) {
    const reader = new FileReader();
    reader.onload = function () {
        document.getElementById('profile-img').src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});

document.getElementById('edit-profile-btn').addEventListener('click', function () {
    document.getElementById('edit-profile-form').style.display = 'grid';
    document.getElementById('profile-info-display').style.display = 'none';
});

document.getElementById('cancel-edit-btn').addEventListener('click', function () {
    document.getElementById('edit-profile-form').style.display = 'none';
    document.getElementById('profile-info-display').style.display = 'grid';
});

document.getElementById('edit-profile-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const department = document.getElementById('department').value;

    document.getElementById('display-first-name').textContent = firstName;
    document.getElementById('display-surname').textContent = surname;
    document.getElementById('display-email').textContent = email;
    document.getElementById('display-phone').textContent = phone;
    document.getElementById('display-department').textContent = department;

    document.getElementById('edit-profile-form').style.display = 'none';
    document.getElementById('profile-info-display').style.display = 'grid';
});
