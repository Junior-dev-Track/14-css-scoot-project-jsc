let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // On scroll down, hide the header
        header.classList.add('header-hidden');
    } else {
        // On scroll up, show the header
        header.classList.remove('header-hidden');
    }
    lastScrollTop = scrollTop;
});