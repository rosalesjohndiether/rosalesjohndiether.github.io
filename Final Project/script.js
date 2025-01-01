// Create a map and attach it to the 'map' div
const map = new ol.Map({
 target: 'map', // ID of the div where the map will be rendered
 layers: [
 // Add a base layer from OpenStreetMap
 new ol.layer.Tile({
 source: new ol.source.OSM() // OpenStreetMap source
 })
 ],
 view: new ol.View({
 center: ol.proj.fromLonLat([0, 0]), // Center of the map [longitude, latitude]
 zoom: 2 // Initial zoom level
 })
});