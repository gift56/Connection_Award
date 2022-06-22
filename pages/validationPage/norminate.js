

donateForm.addEventListener('submit', (e) => {
    e.preventDefault();

    norminateValidation();
});

const norminateValiditity = () => {
    let [validName, validLink, validInsta, validTwitt, validFace] = [false, false, false, false]

    if (Fullname.value === '') {
        Fullname.classList.add('error');
    }
    else {
        Fullname.classList.add('success');
        Fullname.classList.remove('error');
        validFeedback.innerHTML = 'looking good !';
        validFeedback.style.color = 'green';
        validName = true
    }
    if (awardLink.value === '') {
        awardLink.classList.add('error');
    }
    else {
        awardLink.classList.add('success');
        awardLink.classList.remove('error');
        validLink = true
    }
    if (awardInsta.value === '') {
        awardInsta.classList.add('error');
    }
    else {
        awardInsta.classList.add('success');
        awardInsta.classList.remove('error');
        validInsta = true
    }
    if (awardTwitt.value === '') {
        awardTwitt.classList.add('error');
    }
    else {
        awardTwitt.classList.add('success');
        awardTwitt.classList.remove('error');
        validTwitt = true
    }
    if (awardFace.value === '') {
        awardFace.classList.add('error');
    }
    else {
        awardFace.classList.add('success');
        awardFace.classList.remove('error');
        validFace = true
    }
    return validName && validFace && validTwitt && validLink && validInsta
}
const openModal = () => {
    voteM.classList.add('disp-f');
}
const closeModal = () => {
    voteM.classList.remove('disp-f')
}
closeitem.addEventListener('click', closeModal);

function norminateValidation() {
    let confirmPages = submitBtn.addEventListener('click', openModal);

    norminateValiditity() ? confirmPages : " "
}