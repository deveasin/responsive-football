const menuBar = document.getElementById('mobile-menu-bar');
const mainMenu = document.querySelector('.menu');

menuBar.addEventListener('click', function(){
    mainMenu.classList.toggle("on");
});