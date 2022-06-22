const showMenu = () => {
    navMenu.classList.toggle('show');
    navBtn.classList.toggle('show');
}
changeicon = (icon) => icon.classList.toggle('fa-times')
Icons.addEventListener('click', showMenu);

const showLogOut = () => {
    logMenu.classList.toggle('disp-f');
}
Account.addEventListener('click', showLogOut);

const openModal = () => {
    voteM.classList.add('disp-f');
}
const closeModal = () => {
    voteM.classList.remove('disp-f')
}
closeitem.addEventListener('click', closeModal);
vote1.addEventListener('click', openModal);
vote2.addEventListener('click', openModal);
vote3.addEventListener('click', openModal);
vote4.addEventListener('click', openModal);

const increasingNumber = () => {
    if (figureOne.innerHTML == 1) {
        return figureOne++
    }
}



incrementFigure.addEventListener('click', increasingNumber);