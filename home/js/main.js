document.querySelector('.hamburger-button').addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    if (menu.style.opacity == '0') {
        menu.style.opacity = '1';
    } else {
        menu.style.opacity = '0';
    }
});