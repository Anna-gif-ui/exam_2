function toggleMenu(e) {
  e.preventDefault();
  document.body.classList.toggle('menu-opened');
}
function closeMenu() {
  document.body.classList.remove('menu-opened');
}

var header   = document.querySelector('header');
var headroom = new Headroom(header, {
    tolerance : 10,
});
headroom.init();


$(document).ready(function () {
  $('.header-slider').slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    infinite: true,

    autoplay: true,
    autoplaySpeed: 4000,
    
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
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
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [{
        breakpoint: 1030,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        }
      },{
        breakpoint: 600,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        }
      },
    ]

  });            
});

var map, marker, infowindow, geocoder;

function geocodePlaceId(value) {

geocoder.geocode( { 'address': value }, function(results, status) {
  if (status == 'OK') {
      console.log(results);
      map.setCenter(results[0].geometry.location);
      marker.setPosition(results[0].geometry.location);
      infowindow.close();
      infowindow.setContent(`<b>${results[0].formatted_address}</b>`);
  } else {
      alert('Geocode was not successful for the following reason: ' + status);
  }
});
}

function initMap() {

  geocoder = new google.maps.Geocoder();
  infowindow = new google.maps.InfoWindow();

  let cities = document.querySelectorAll(".city");

  cities.forEach((city) => {
    city.addEventListener("click", function() {
      geocodePlaceId(city.getAttribute('data-address'))
    })
  })
 
  let coordinate = {   
    lat: 40.672658,
    lng: -73.904194
  }

  let centrMap = {
    lat: 40.675276,
    lng: -73.904117
  }
    
  map = new google.maps.Map(document.getElementById('map'), {
    center: centrMap,
    zoom: 14,
      styles: styles
});

  marker = new google.maps.Marker({
    position: coordinate,
    map: map,
    icon: './img/marker.png',
    title: '91 Nolan Extensions Suite 670',
    animation : google.maps.Animation.BOUNCE,
  });

  infowindow = new google.maps.InfoWindow({
    content: `<b>91 Nolan Extensions Suite 670</b>`
  });

  marker.addListener('click', function() {
      infowindow.open(map, marker);
  });

  map.addListener('click', function() {
      infowindow.close();
  });
}


