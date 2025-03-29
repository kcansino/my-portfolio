$(document).ready(function(){
    
    AOS.init();

    lightbox.option({
        'showImageNumberLabel':false
    })

    $('.works-owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },
            1000:{
                items:2
            },
            1200:{
                items:2
            },
            1300:{
                items:3
            }
        }
    })

});