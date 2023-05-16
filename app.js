var map = L.map("map").setView([48.86284902002203, 2.3413018393060523], 13);

var Stadia_OSMBright = L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  }
);



var marker = L.marker([48.86284902002203, 2.3413018393060523]).addTo(map);
