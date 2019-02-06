// general js for the project that wouldn't be a reuseable component

//mapbox campaigns
mapboxgl.accessToken = 'pk.eyJ1IjoiaGFtaXNoamdyYXkiLCJhIjoiY2pkbjBmeGN6MDd1YzMzbXI3cWdpNThjayJ9.3YE8T1H2QUyqNIkxdKWxkg';
var map = new mapboxgl.Map({
    container: 'map',
  //  style:'mapbox://styles/hamishjgray/cjj70k7ob1y402snzv5d9epe2',
    style:'mapbox://styles/hamishjgray/cjj70waf71ymc2rpiit0qioxe',
    center: [-4.862929, 27.927995],
    minZoom: 1.7
    //
});
// disable map zoom when using scroll
//map.scrollZoom.disable();
//hamishjgray.cjj5fs16z05af2wpr9sk5ridw-4voi3
/*<script>
  mapboxgl.accessToken = 'pk.eyJ1IjoiaGFtaXNoamdyYXkiLCJhIjoiY2pkbjBmeGN6MDd1YzMzbXI3cWdpNThjayJ9.3YE8T1H2QUyqNIkxdKWxkg';
  const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/hamishjgray/cjj70k7ob1y402snzv5d9epe2',
  center: [75.111535, 9.837476],
  zoom: 3.0
// disable map zoom when using scroll
map.scrollZoom.disable();

</script>*/
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
    .setHTML('<div class="img-background bg-img--1-1" style="background-image: url('+ feature.properties.img +'); background-color: rgba(0,0,0,0.2); background-blend-mode: multiply;">' + feature.properties.title + '</div><p>' + feature.properties.subh +" "+ '</p><a class="popup-link" target="_blank" href="'+ feature.properties.url +'">Mehr Info </a>')
    .setLngLat(feature.geometry.coordinates)
    .addTo(map);
});

});
