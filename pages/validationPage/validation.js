const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}/;


Form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkValidation();
});
let checkValidity = () => {
    let [validEmail, validPassword] = [false, false]
    if (email.value === '') {
        email.classList.add('error');
        email.classList.remove('success');
        err.innerHTML = 'please enter this field';
        err.style.color = 'red';
    }
    else if (!pattern.test(email.value)) {
        email.classList.add('error');
        email.classList.remove('success');
        err.innerHTML = 'Invalid Email';
        err.style.color = 'red';
    }
    else {
        email.classList.add('success');
        err.style.color = 'green';
        err.innerHTML = 'Success'
        validEmail = true
    }
    if (password.value == '') {
        password.classList.add('error');
        password.classList.remove('success');
        errP.innerHTML = 'Password field cannot be blank';
        errP.style.color = 'red';
    }
    else if (password.value <= 5) {
        password.classList.add('error');
        password.classList.remove('success');
        errP.innerHTML = 'Password must be greater than five characters';
        errP.style.color = 'red';
    }
    else {
        password.classList.add('success');
        errP.style.color = 'green';
        errP.innerHTML = 'Looking Good!';
        validPassword = true
    }
    return validEmail && validPassword
}
function checkValidation() {
    let homePage = '/index.html';

    checkValidity() ? window.location.assign(homePage) : " "
}