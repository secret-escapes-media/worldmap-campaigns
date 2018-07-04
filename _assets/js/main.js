// general js for the project that wouldn't be a reuseable component

//mapbox campaigns
mapboxgl.accessToken = 'pk.eyJ1IjoiaGFtaXNoamdyYXkiLCJhIjoiY2pkbjBmeGN6MDd1YzMzbXI3cWdpNThjayJ9.3YE8T1H2QUyqNIkxdKWxkg';
var map = new mapboxgl.Map({
    container: 'map',
    style:'mapbox://styles/hamishjgray/cjj70waf71ymc2rpiit0qioxe'
    /*style: 'mapbox://styles/hamishjgray/cjj4dae1p02kc2ssabbz8jihh'*/
    //
});
map.on('load', function(e) {

  // Add the data to your map as a layer
  /*map.addLayer({
   id: 'locations',
    type: 'symbol',
    // Add a GeoJSON source containing place coordinates and information.
    source: {
      type: 'geojson',
      data: markers
    }
  });*/
  // add markers to map
/*markers.features.forEach(function(marker) {

  // create a DOM element for the marker
  var el = document.createElement('div');
  el.className = 'marker marker--' + marker.properties.id;
  el.dataset.markerId = marker.properties.id;

  // add marker to map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);

});*/
map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['campaigns-de'] // replace this with the name of the layer
  });

  console.log(features);

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, -15] })

    .setLngLat(feature.geometry.coordinates)
    .setHTML('<div class="img-background" style="background-image: url(/campaign-map/_assets/img/'+ feature.properties.img +')">' + feature.properties.title + '</div><p>' + feature.properties.subh +" "+ '</p><a class="popup-link" target="_blank" href="'+ feature.properties.url +'">Mehr Info </a>')
    .setLngLat(feature.geometry.coordinates)
    .addTo(map);
});

});
