import 'jquery-validation';
import 'boxicons/css/boxicons.min.css';
import '@sass/main.scss';
import {valid} from './js/validate-form'


$(document).ready(function(){
    valid;
})


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

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll
let reveal = document.createElement('script');
reveal.src = "https://unpkg.com/scrollreveal";

document.body.append(reveal);

reveal.onload = function () {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    })
    
    sr.reveal('.home__title', {})
    sr.reveal('.button', {delay: 200})
    sr.reveal('.home__img', {delay: 400})
    sr.reveal('.home__social-icon', {interval: 200})
    
    sr.reveal('.about__img', {})
    sr.reveal('.about__subtitle', {delay: 200})
    sr.reveal('.about__text', {delay: 400})
    
    sr.reveal('.skills__subtitle', {})
    sr.reveal('.skills__text', {delay: 200})
    sr.reveal('.skills__data', {interval: 200})
    sr.reveal('.skills__img', {delay: 400})
    
    sr.reveal('.work__img', {interval: 200})
    
    sr.reveal('.contact__input', {interval: 200})    
}


