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



function initMap() {

  // geocoder = new google.maps.Geocoder();

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
      styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#bdbdbd"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "poi.business",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#ffffff"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#dadada"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "transit",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#c9c9c9"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }]
                }]
});

  marker = new google.maps.Marker({
    position: coordinate,
    map: map,
    icon: './img/marker.png',
    title: '91 Nolan Extensions Suite 670',
    // draggable: true,
    animation : google.maps.Animation.BOUNCE,
  });

  // setAnimation();

  // google.maps.event.addListener(infowindow,'closeclick',function(){
  //   marker.setAnimation(google.maps.Animation.BOUNCE);
  // });

  // marker.addListener('click', function () {
  //   marker.setAnimation(null);
  // });

  infowindow = new google.maps.InfoWindow({
    content: `<b>91 Nolan Extensions Suite 670</b>`
  });

  marker.addListener('click', function() {
      infowindow.open(map, marker);
  });

  map.addListener('click', function() {
      infowindow.close();
  });

  // move();
};
