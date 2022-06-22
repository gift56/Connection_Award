const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}/;

Signupform.addEventListener('submit', (e) => {
    e.preventDefault();

    signUpValidation();
});

let signUpValiditity = () => {
    let [validName, validEmail, validPassword, validPhone] = [false, false, false, false]

    if (Firstname.value === '' || lastName.value === '') {
        Firstname.classList.add('error');
        lastName.classList.add('error');
    }
    else {
        Firstname.classList.add('success');
        lastName.classList.add('success');
        validFeedback.innerHTML = 'Looking Good!';
        validFeedbackL.innerHTML = 'Looking Good!';
        validFeedback.style.color = 'green';
        validFeedbackL.style.color = 'green';
        Firstname.classList.remove('error');
        lastName.classList.remove('error');
        validName = true
    }
    if (email.value === '') {
        email.classList.add('error');
        email.classList.remove('success');
        validfeedbackE.innerHTML = 'Email Field cannot be blank';
        validfeedbackE.style.color = 'red';
    }
    else if (!pattern.test(email.value)) {
        email.classList.add('error');
        email.classList.remove('success');
        validfeedbackE.innerHTML = 'Invalid Email';
        validfeedbackE.style.color = 'red';
    }
    else {
        email.classList.add('success');
        validfeedbackE.style.color = 'green';
        validfeedbackE.innerHTML = 'Success'
        validEmail = true
    }
    if (password.value == '') {
        password.classList.add('error');
        validFeedbackpass.innerHTML = 'Password field cannot be blank';
        validFeedbackpass.style.color = 'red';
    }
    else if (password.value.length < 5) {
        password.classList.add('error');
        validFeedbackpass.innerHTML = 'Password should be more than five characters';
        validFeedbackpass.style.color = 'red';
    }
    else {
        password.classList.add('success');
        password.classList.remove('error');
        validFeedbackpass.innerHTML = 'Looking Good!';
        validFeedbackpass.style.color = 'green';
        validPassword = true;
    }
    if (phoneNumber.value == '') {
        phoneNumber.classList.add('error');
    }
    else {
        phoneNumber.classList.add('success');
        phoneNumber.classList.remove('error');
        validPhone = true
    }
    return validName && validPassword && validEmail && validPhone
}

function signUpValidation() {
    let confirmPages = '/index.html';

    signUpValiditity() ? window.location.assign(confirmPages) : " "
}