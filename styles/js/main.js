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

var i = 0;

const increasingNumber = () => {
    figureOne.innerHTML = ++i;
}
const increasingNumber2 = () => {
    figure2.innerHTML = ++i;
}

const increasingNumber3 = () => {
    figure3.innerHTML = ++i;
}
const increasingNumber4 = () => {
    figure4.innerHTML = ++i;
}
const decreasingNumber = () => {
    figureOne.innerHTML = --i;
}
const decreasingNumber2 = () => {
    figure2.innerHTML = --i;
}
const decreasingNumber3 = () => {
    figure3.innerHTML = --i;
}
const decreasingNumber4 = () => {
    figure4.innerHTML = --i;
}

decrementFigure.addEventListener('click', decreasingNumber);
decrementFigureTwo.addEventListener('click', decreasingNumber2);
decrementFigureThree.addEventListener('click', decreasingNumber3);
decrementFigureFour.addEventListener('click', decreasingNumber4);
incrementFigure.addEventListener('click', increasingNumber);
incrementFigureTwo.addEventListener('click', increasingNumber2);
incrementFigureThree.addEventListener('click', increasingNumber3);
incrementFigureFour.addEventListener('click', increasingNumber4);