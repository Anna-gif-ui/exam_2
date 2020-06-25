function toggleMenu(e) {
  e.preventDefault();
  document.body.classList.toggle('menu-opened');
}
function closeMenu() {
  document.body.classList.remove('menu-opened');
}

// var header   = document.querySelector('header');
// var headroom = new Headroom(header, {
//     tolerance : 10,
// });
// headroom.init();


$(document).ready(function () {
  $('.header-slider').slick({
    arrows: false,
    dots: true,
    // adaptiveHeight: true,
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
    
    //autoplay: true,
    autoplaySpeed: 4000

  });            
});


var map, marker, infowindow, geocoder;


// select.addEventListener('change', (e) => {

//     console.log (e.target.value);
//     move();
//   })

// function move () {

//   geocoder.geocode( {'address': 'a[data-address]'}, function(results, status) {
//     if (status == 'OK') {
//         console.log(results);
//         map.setCenter(results[0].geometry.location);
//         marker.setPosition(results[0].geometry.location);
//         // infowindow.close();
//         // infowindow.setContent(`<b>${results[0].formatted_address}</b>`);
//     } else {
//         alert('Geocode was not successful for the following reason: ' + status);
//     }
//   });
// }



MyMap = function () { 
  self = this; // потребуется для ссылки на экземпляр MyMap во вложенных функциях 
  this.map = map, // можно не создавать объект LatLng явно, а использовать литерал такого вида mapTypeId: google.maps.MapTypeId.ROADMAP }); 
  this.markers = new Array; 
  this.markers[0] = new google.maps.Marker({ position: new google.maps.LatLng(55.763525,37.560893), // опять обходимся без дополнительной переменной 
  map: this.map, title: 'Пробная точка!' }); // сюда будет добавляться новый код 
  }; 
  myMap = new MyMap; 
  google.maps.event.addDomListener(window, 'load', myMap);

this.MoveMapTo = function(lat,lng) { 
  return function(e) { 
    self.map.panTo(new google.maps.LatLng(lat,lng)); 
  }
 } 
 google.maps.event.addDomListener(document.getElementById('newYork'), 'click', this.moveMapTo(40.6738771,73.972278));
 google.maps.event.addDomListener(document.getElementById('hongKong'), 'click', this.moveMapTo(22.3277246, 114.1555149)); 

 setInterval(function() { 
  self.markers[0].setPosition( new google.maps.LatLng(self.markers[0].getPosition().lat()+Math.random()*0.0002-0.0001, self.markers[0].getPosition().lng()+0.0001));
 },100);

 setInterval(function() { 
  if (self.map.getBounds().contains(self.markers[0].getPosition())) { 
    self.map.panTo(self.markers[0].getPosition()); 
  } 
 },5000);

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
    
  map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 13,
    center: centrMap,
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
