// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"14",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Using the onEachFeature function
// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  onEachFeature: function(feature, layer) {
    console.log(feature);
    layer.bindPopup("<h2>"+ "Airport code: " + feature.properties.faa + 
    "<h2><hr><p>" + "Airport name: " + feature.properties.name + "</p>");
  }
}).addTo(map);


//  Using the pointToLayer function
// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature,latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>"+ feature.properties.name + 
//     "<h2><hr><p>" + feature.properties.city + ", " + feature.properties.country + "</p>")
//   }
// }).addTo(map);

// // Coordinates for each point to be used in the line.
// let line = [
//     [37.6214, -122.3790],
//     [30.1975, -97.6664],
//     [43.6777, -79.6248],
//     [40.6413, -74.7781]
//   ];

  // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "blue",
//     weight: 4,
//     opacity: .5,
//     dashArray: '1,5'

//   }).addTo(map);

// An alternative way to create the map object with a center and zoom level.
// Useful when need to add multiple tile layers, or a background image of maps
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });


// Get the data from cities.js
let cityData = cities;

//   Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/100000
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });


// Edit the logic.js file to create an orange circle popup marker for each city, with a lineweight of 4, 
// a radius where the population number is decreased by 200,000,  that's on a dark map. When you click 
// on the circle, the popup should display the city, state, and the population formatted with a thousands separator.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         color: 'orange'
//         // fillColor:
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });


// To add a point or dot to a map
// let circle = L.circle([34.0522, -118.2437], {
//     radius: 100
// }).addTo(map);

// Skill Drill Using the Leaflet documentation, create a light-yellow 
// circle with black lines indicating a 300-meter radius of Central Los Angeles on a dark map.
// let circle = L.circleMarker([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: '#ffffa1',
//     radius: 300
// }).addTo(map);



// Dark map setting
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});



// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);