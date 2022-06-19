const form = document.querySelector('form');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');

function showError(input, error) {
    const formControl = input.parentElement;
    formControl.className = 'formControl error';
    const small = formControl.querySelector('small');
    small.innerHTML = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'formControl success';
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (fullName.value == '') {
        showError(fullName, 'Full Name is Requiered!');
    }
    else {
        showSuccess(fullName);
    }

    if (email.value == '' || email.value.indexOf('@') == -1) {
        showError(email, 'Email is Requiered!');
    }
    else {
        showSuccess(email);
    }

    if (phone.value == '' || isNaN(phone.value)) {
        showError(phone, 'Phone is Requiered!');
    }
    else {
        showSuccess(phone);
    }

    if (subject.value == '') {
        showError(subject, 'What is the subject?');
    }
    else {
        showSuccess(subject);
    }
})