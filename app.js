mapboxgl.accessToken =
  "pk.eyJ1IjoibWlrZXNjaGFmZXIiLCJhIjoiY2toZDU3YmR5MDFmazJ6azkyeXh0bDNubSJ9.belAQyRhtSAFaWUxa-e1vg";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-122.419416, 37.774929]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/satellite-streets-v11?optimize=true",
    center: center,
    zoom: 13,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav, "bottom-right");

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");
}
