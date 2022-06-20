const showMenu = () => {
    navMenu.classList.toggle('show');
    navBtn.classList.toggle('show');
}
changeicon = (icon) => icon.classList.toggle('fa-times')
Icons.addEventListener('click', showMenu);