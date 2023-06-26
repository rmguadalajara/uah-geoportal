import { map } from "./map-layers.js";

//SE declara barra lateral
var sidebar = L.control.sidebar("sidebar", {
  position: 'right'
});

//Se añade barra lateral al mapa
sidebar.addTo(map);

//SE declara layer switcher para cambiar de capa dinamicamente
const layerSwitcher = new LayerSwitcher({
  reverse: true,
  groupSelectStyle: 'group'
});

//Se añade el layer switcher al maapa
map.addControl(layerSwitcher);

//SE muestra el panel de layer switcher
layerSwitcher.showPanel();

//Logica de control de cambio de capa
function toggleLayer(eve) {
  const lyrname = eve.target.value;
  const checkedStatus = eve.target.checked;
  const lyrList = map.getLayers();

  lyrList.forEach(function (element) {
    if (lyrname == element.get('title')) {
      element.setVisible(checkedStatus);
    }
  });
}

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
  projection: 'EPSG:4326',
  // comment the following two lines to have the mouse position
  // be placed within the map.
  className: 'custom-mouse-position',
  target: document.getElementById('mouse-position'),
});

//Se añade control al mapa para gestionar posicion el raton
map.addControl(mousePos)

const projectionSelect = document.getElementById('projection');
projectionSelect.addEventListener('change', function (event) {
  mousePositionControl.setProjection(event.target.value);
});

const precisionInput = document.getElementById('precision');
precisionInput.addEventListener('change', function (event) {
  const format = ol.coordinate.createStringXY(event.target.valueAsNumber);
  mousePositionControl.setCoordinateFormat(format);
});