const toggleMenu = function() {
    const menu = document.querySelectorAll('.left')[0];

    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
    } else {
        menu.classList.add('open');
    }
}