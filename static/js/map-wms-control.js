// Importa el objeto 'map' desde el archivo 'map-layers.js'
import { map } from "./map-layers.js";

// Define un objeto con las URL de los servicios WMS
const services = {
  'UAH-geoserver': 'http://localhost/geoserver/ows?',
  'IDEE COPERNICUS': 'https://servicios.idee.es/wms/copernicus-landservice-spain?',
  'CODIGOS POSTALES': 'https://www.cartociudad.es/wms-inspire/direcciones-ccpp',
  'IDEE HIDROGRAFIA': 'https://servicios.idee.es/wms-inspire/hidrografia',
  'IGN': 'https://www.ign.es/wms-inspire/ign-base',
  'TOPOGRAFIA': 'https://servicios.idee.es/wms-inspire/mdt',
  'SATELITE HISTORICOS': 'https://wms-satelites-historicos.idee.es/satelites-historicos',
  'OCUPACION DE SUELO': 'https://servicios.idee.es/wms-inspire/ocupacion-suelo',
  'TRANSPORTE': 'https://servicios.idee.es/wms-inspire/transportes',
  'EOX': 'https://tiles.maps.eox.at/wms?',
  'GEBCO': 'https://www.gebco.net/data_and_products/gebco_web_services/web_map_service/mapserv',
};

// Función que devuelve el nombre del servicio WMS a partir de su URL
function getServiceName(url) {
  let serviceName;
  for (const [key, value] of Object.entries(services)) {
    if (url.includes(value)) {
      serviceName = key;
      break;
    }
  }
  return serviceName;
}

// Añade un control de cambio de capas al objeto 'map'
map.addControl(new ol.control.LayerSwitcher({
  trash: true,
  extent: true,
}));

// Crea un objeto 'Permalink' para guardar la posición del mapa en la URL
var plink = new ol.control.Permalink({ visible: false, localStorage: 'position' });
map.addControl(plink);

// Añade un control de búsqueda de lugares al objeto 'map'
map.addControl(new ol.control.SearchNominatim({ zoomOnSelect: 13 }));

// Si la URL contiene el parámetro 'edugeo', muestra los botones de opciones
if (plink.hasUrlParam('edugeo')) $('.options button').show();

// Crea un objeto 'WMSCapabilities' para cargar las capas del servicio WMS
var cap = new ol.control.WMSCapabilities({
  target: $('.options').get(0),
  cors: true,
  optional: 'token',
  services: services,
  trace: true
});
map.addControl(cap);

// Añade un evento 'load' al objeto 'cap' para cargar la capa seleccionada
cap.on('load', function (e) {
  var layer = e.layer;
  var source = layer.getSource();
  var layerName = e.options.source.params.LAYERS;
  var legendUrl = e.options.data.legend

  // Crea un elemento de imagen para la leyenda de la capa
  var legendImg = document.createElement('img');
  legendImg.classList.add = 'legend-img';
  legendImg.src = legendUrl;


  hideAllLegends();


  // Crea un elemento div para la pestaña de la leyenda de la capa
  var tab = document.createElement('div');
  tab.classList.add('legend-tab');
  tab.classList.add(layerName.split(':')[1]);
  var labelContainer = document.createElement('div');
  var label = document.createElement('label');
  labelContainer.appendChild(label);

  if (layerName.split(':').length > 1) {
    label.textContent = layerName.split(':')[1];
  } else {
    label.textContent = layerName;
  }
  tab.appendChild(labelContainer);
  const legendTabs = document.querySelectorAll('.legend-tab');
  legendTabs.forEach(tab => {
    tab.classList.remove('active');
  });
  tab.classList.add('active');
  tab.display = 'block';

  // Agrega un evento de clic a la pestaña para mostrar y ocultar la leyenda
  label.addEventListener('click', function () {
    // Oculta todas las leyendas de capas
    hideAllLegends();
    const legendTabs = document.querySelectorAll('.legend-tab');
    legendTabs.forEach(tab => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
    var display = legendImg.style.display;
    legendImg.style.display = display === 'none' ? 'block' : 'none';
  });


  // Agrega la pestaña y la imagen de la leyenda al elemento HTML
  var legendContainer = document.getElementById('legend-container');
  legendContainer.appendChild(tab);
  tab.appendChild(legendImg);

  // Muestra el contenedor de la leyenda de la capa
  document.getElementById('legend-container').classList.remove('hidden');

  // Guarda la URL y el nombre de la capa en el objeto 'plink'
  plink.setUrlParam('url', url);
  plink.setUrlParam('layer', layerName);

  // Añade la capa a un grupo con el mismo nombre que el servicio WMS
  var serviceName = getServiceName(e.options.source.url);
  var group = null;
  map.getLayers().forEach(function (lyr) {
    if (lyr instanceof ol.layer.Group && lyr.get('title') === 'Servicio WMS: ' + serviceName) {
      group = lyr;
    }
  });
  if (!group) {
    group = new ol.layer.Group({
      title: 'Servicio WMS: ' + serviceName,
      layers: []
    });
    map.addLayer(group);
  }
  group.getLayers().push(layer);

  // Agrega un evento de clic a la capa 'UAH-geoserver'
  if (serviceName.toLowerCase().includes('uah')) {
    map.on('click', function (evt) {
      var viewResolution = map.getView().getResolution();
      var projectionCode = source.getProjection().getCode();
      var url = source.getFeatureInfoUrl(
        evt.coordinate,
        viewResolution,
        projectionCode,
        { 'INFO_FORMAT': 'application/json' }
      );

      if (url) {
        console.log(url); // Imprime la URL en la consola
        fetch(url)
          .then(function (response) { return response.json(); })
          .then(function (json) {
            // Muestra un tooltip con el valor de la capa 'UAH-geoserver'
            var tooltipContainer = document.getElementById('value_layer');
            // Añade un botón de cierre al tooltip
            if (!tooltipContainer.innerHTML.includes('close')) {
              tooltipContainer.innerHTML += '<span class="" onclick="this.parentElement.classList.add(\'hidden\')"><i class="fa fa-close close"></i></span>';
            }
            if (json && json.features && json.features.length > 0) {
              var properties = json.features[0].properties;
              var previousTable = tooltipContainer.querySelectorAll('.' + layerName.split(':')[1]);
              if (previousTable.length > 0) {
                previousTable.forEach(function (table) {
                  table.remove();
                });
              }
              var table = '<table class="ol-popup medida-tooltip ' + layerName.split(':')[1] + '">';
              // Añade color de fondo a la cabecera de la tabla
              table += '<thead><tr><th colspan="2" style="background-color: #003da7;"> Nombre de capa: ' + layerName.split(':')[1] + '</th></tr></thead>';
              for (var key in properties) {
                table += '<tr><td>' + key + '</td><td>' + properties[key] + '</td></tr>';
              }
              table += '</table>';
              tooltipContainer.innerHTML += table;
              // Convierte las coordenadas del mapa en coordenadas de píxeles
              var pixel = map.getPixelFromCoordinate(evt.coordinate);

              // Actualiza la posición del tooltip
              tooltipContainer.style.left = pixel[0] + 'px';
              tooltipContainer.style.top = pixel[1] + 'px';

              tooltipContainer.classList.remove('hidden');
            } else {
              tooltipContainer.classList.add('hidden');
            }
          });
      }
    });
  }

});

// Oculta el tooltip al mover el mapa
map.on('dbclick', function () {
  var tooltip = document.getElementById('info');
  tooltip.style.display = 'none';
});

// Carga la capa seleccionada si la URL contiene los parámetros 'url' y 'layer'
var url = plink.getUrlParam('url');
var layerName = plink.getUrlParam('layer');
if (url) {
  cap.loadLayer(url, layerName);
}

// Agrega un evento de clic al icono de la leyenda para mostrar y ocultar todas las leyendas de capas
const legendContainer = document.querySelector('#legend-container');
const legendIcon = legendContainer.querySelector('i');
legendIcon.addEventListener('click', () => {
  const legendItems = legendContainer.querySelectorAll('img, div');
  legendItems.forEach(item => {
    item.classList.toggle('hidden');
  });
});



function hideAllLegends() {
  var legendImgs = document.querySelectorAll('#legend-container img');
  legendImgs.forEach(function (img) {
    img.style.display = 'none';
  });
}

function closeTooltip() {
  this.parentElement.classList.add('hidden');
  document.getElementById('value_layer');
}