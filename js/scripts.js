$(document).ready(function () {

    $('.header-slider').slick({
        arrows: false,
        dots: true,
        // adaptiveHeight: true,
        infinite: true,
        // autoplay: true,
        //   autoplaySpeed: 400,
        speed: 3000,
        vertical: true,
        verticalSwiping: true,
        // swipeToSlide: true,
        slidesToShow: 1,
        // slidesToScroll: 1,
     });
    
         $('.news-slider').slick({
            dots: true,
            arrows:true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            //autoplay: true,
            autoplaySpeed: 4000
    
        });
            
    });

