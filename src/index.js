import 'jquery-validation';
import 'boxicons/css/boxicons.min.css';
import '@sass/main.scss';
import {valid} from './js/validate-form';
import {animateSkills} from './js/animate_skills';
import './js/hamburger';
import './js/reveal';
import './js/nav-toggle';

$(document).ready(function(){
    valid; 
    animateSkills;
    $('.home__arrow').on('click', function(){        
        let dest = document.querySelector('.about'); 
          $('html,body').animate({ 
            scrollTop: $(dest).offset().top}, 100);
        });
})