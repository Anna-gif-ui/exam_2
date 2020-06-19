$(document).ready(function () {

    $('.header-slider').slick({
        arrows: false,
        dots: true,
        // adaptiveHeight: true,
        infinite: true,
  
        // autoplay: true,
        //   autoplaySpeed: 400,
        speed: 4000,
        vertical: true,
        verticalSwiping: true,
        // swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
     });
    
         $('.news-slider').slick({
            dots: true,
            arrows:true,
            prevArrow   : `<button class="slider__arrow slider__arrow--prev btn btn--slide btn--icon">
                        <i class="fas fa-chevron-left"></i></button>`,
            nextArrow   : `<button class="slider__arrow slider__arrow--next btn btn--slide btn--icon">
                         <i class="fas fa-chevron-right"></i></button>`,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            //autoplay: true,
            autoplaySpeed: 4000
    
        });
            
    });

