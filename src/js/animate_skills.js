export const animateSkills = $(window).scroll(function() {
    $('.skills__data').scrollTop(function() {
        $('.skills__html').delay(300).animate({            
            width: '90%'
        }, 3000);
        $('.skills__css').delay(300).animate({            
            width: '75%'
        }, 3000);
        $('.skills__js').delay(300).animate({            
            width: '60%'
        }, 3000);
        $('.skills__vue').delay(300).animate({            
            width: '50%'
        }, 3000);
    })
});