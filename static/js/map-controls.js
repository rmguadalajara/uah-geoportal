import { map } from "./map-layers.js";

//SE declara barra lateral
var sidebar = L.control.sidebar("sidebar", {
  position: 'right'
});

//Se añade barra lateral al mapa
sidebar.addTo(map);

 
//SE declara linea de escala
const scale = new ol.control.ScaleLine({
});

//SE añade linea de escala al mapa
map.addControl(scale)

//SE declara  Zoom control 
const zoom = new ol.control.ZoomSlider({
});

//Se añade zoom control al mapa
map.addControl(zoom)

//Estilo de posición raton
const mouseStyle = new ol.style.Style({
  text: new ol.style.Text({
    font: '14px Calibri,sans-serif',
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 255, 1)',
    }),
    backgroundFill: new ol.style.Fill({
      color: 'rgba(0, 0, 0, 0.7)',
    }),
    padding: [3, 3, 3, 3],
    textBaseline: 'bottom',
    offsetY: -15,
  }),

});

//SE declara elemento de posicion del raton
const mousePos = new ol.control.MousePosition({
  coordinateFormat: ol.coordinate.createStringXY(4),
  projection: 'EPSG:3857',
  // comment the following two lines to have the mouse position
  // be placed within the map.
  className: 'custom-mouse-position',
  target: document.getElementById('mouse-position'),
});

//Se añade control al mapa para gestionar posicion el raton
map.addControl(mousePos)

const projectionSelect = document.getElementById('projection');
projectionSelect.addEventListener('change', function (event) {
  mousePos.setProjection(event.target.value);
});
