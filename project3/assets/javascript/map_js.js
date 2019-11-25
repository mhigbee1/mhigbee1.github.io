//google map js

function init() {
  var el = document.getElementById('map');
  var myLocation = new google.maps.LatLng(41.932112, -87.688162);
  var mapOptions = {
    center: myLocation,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ['roadmap', 'satellite', 'terrain'],
      position: google.maps.ControlPosition.TOP_CENTER
    }
  };

  var locals = [
    ['iO Theater', 41.908687, -87.651731, 1],
    ['Annoyance Theatre', 41.939901, -87.651324, 2],
    ['CIC Theater', 41.954622, -87.665159, 1],
    ['The Playground Theater', 41.940447, -87.649129, 1],
    ['Second City', 41.911782, -87.634953, 1],
    ['Whole Foods Market', 41.940128, -87.668193, 1],
    ['Walmart Supercenter', 41.911857, -87.742812, 1],
    ['Xsport Fitness', 41.939225, -87.709186, 1],
    ['Challengers Comics', 41.915384, -87.687192, 1]
  ];

  var myMap = new google.maps.Map(el, mapOptions);

  for (var i = 0; i < locals.length; i++) {
    var local = locals[i];
    var marker = new google.maps.Marker({
      position: {
        lat: local[1],
        lng: local[2]
      },
      map: myMap,
      animation: google.maps.Animation.DROP,
      icon: 'assets/media/laughing.png',
      title: local[0],
      zIndex: local[3]
    });
  }
}
