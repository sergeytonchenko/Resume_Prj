const showMenu = (toogleId, navId) => {
    const toogle = document.getElementById(toogleId)
    const nav = document.getElementById(navId)

    if (toogle && nav) {
        toogle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu ('nav-toogle', 'nav-menu');

const navLink = document.querySelectorAll('.nav__link');
const hamburger = document.querySelector('.hamburger');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
    hamburger.classList.remove("is-active");
}

navLink.forEach(n => n.addEventListener('click', linkAction));