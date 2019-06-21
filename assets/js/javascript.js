function initMap() {
  var myLatlng = {lat: 18.3385, lng: -64.8566};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: myLatlng
  });

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Click to zoom'
  });

  map.addListener('center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 3000);
  });

  marker.addListener('click', function() {
    map.setZoom(12);
    map.setCenter(marker.getPosition());
  });
}