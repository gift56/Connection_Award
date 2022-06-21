const showMenu = () => {
    navMenu.classList.toggle('show');
    navBtn.classList.toggle('show');
}
changeicon = (icon) => icon.classList.toggle('fa-times')
Icons.addEventListener('click', showMenu);

const openModal = () => {
    voteM.classList.add('disp-f');
}
const closeModal = () => {
    voteM.classList.remove('disp-f')
}
closeitem.addEventListener('click', closeModal);
vote1.addEventListener('click', openModal);