// this doesn't link and gives reference error for now
const servo = require('../../models/servo.js')

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 13,
  });
  map.addListener('dragend', getMapBounds)
  map.addListener('zoom_changed', getMapBounds)
}

function getMapBounds() {
  // get lat long by box or radius
  let mapBoundaries = getVisibleMapCoordinates();
  let coordinatesObject = {
    topLat: mapBoundaries.getNorthEast().lat(),
    topLng: mapBoundaries.getNorthEast().lng(),
    botLat: mapBoundaries.getSouthWest().lat(),
    botLng: mapBoundaries.getSouthWest().lng()
  }
  let petrolStations = servo.getPetrolStations(coordinatesObject);
  addMarkers(petrolStations);
}

function getVisibleMapCoordinates() {
  return map.getBounds();
}

function addMarkers(petrolStations) {
  console.log(petrolStations)
}
// eventListeners - dragend zoom_changed DONE BB
// Get map bound values from viewport on change (maybe radius from map centre)
// Query map bounds lat /long to db
// Pass results into function to make markers
// Marker function should clear existing markers, add new
