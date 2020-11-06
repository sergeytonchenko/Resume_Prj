const reveal = document.createElement('script');
reveal.src = "https://unpkg.com/scrollreveal";

document.body.append(reveal);

reveal.onload = function () {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '100px',
        duration: 2000,
        reset: true        
    })
    
    sr.reveal('.home__title', {delay: 200})
    sr.reveal('.button', {delay: 200})
    sr.reveal('.home__arrow', {delay: 600})
    sr.reveal('.home__img', {delay: 400})
    sr.reveal('.home__social-icon', {interval: 200})
    
    sr.reveal('.about__img', {})
    sr.reveal('.about__subtitle', {delay: 200})
    sr.reveal('.about__text', {delay: 400})
    sr.reveal('.about__education', {delay: 600})
    
    sr.reveal('.skills__subtitle', {})
    sr.reveal('.skills__text', {delay: 200})
    sr.reveal('.skills__data', {interval: 200})
    sr.reveal('.skills__img', {delay: 400})    
    
    sr.reveal('.work__img', {interval: 200})
    
    sr.reveal('.contact__input', {interval: 200})
    sr.reveal('.contact-data', {delay: 200}) 
    sr.reveal('.contact__location', {delay: 200}) 
}