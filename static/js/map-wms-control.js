import { map } from "./map-layers.js";
// http services load on http
/* if (location.protocol === 'https:' && !/^localhost/.test(location.host)) {
  location.href = window.location.href.replace(/^https:/,'http:');
} */

var parent = document.getElementById('layer-control-parent');

map.addControl(new ol.control.LayerSwitcher({
  trash: true,
  extent: true,
}));


var plink = new ol.control.Permalink({ visible: false, localStorage: 'position' });
map.addControl(plink);
map.addControl(new ol.control.SearchNominatim({ zoomOnSelect: 13 }));
if (plink.hasUrlParam('edugeo')) $('.options button').show();

var cap = new ol.control.WMSCapabilities({
  target: $('.options').get(0),
  cors: true,
  optional: 'token',
  services: {
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
  },
  // Show trace in the console
  trace: true
});
map.addControl(cap);
cap.on('load', function (e) {
  var layer = e.layer;
  var source = layer.getSource();
  var layerName = e.options.source.params.LAYERS;
  var url = e.options.source.url;
  layer.set('legend', e.options.data.legend);
  plink.setUrlParam('url', url);
  plink.setUrlParam('layer', layerName);

  // Add layer to a group with the same name as the WMS service
  var serviceName = e.options.source.url;
  var serviceGroup = new ol.layer.Group({
    title: serviceName,
    layers: [layer]
  });
  map.addLayer(serviceGroup);

  // Add click event to UAH-geoserver layer
  if (layerName.toLowerCase().includes('conj')) {
    map.on('click', function (evt) {
      var viewResolution = map.getView().getResolution();
      var url = source.getFeatureInfoUrl(
        evt.coordinate,
        viewResolution,
        'EPSG:3857',
        { 'INFO_FORMAT': 'text/html' }
      );
      if (url) {
        fetch(url)
          .then(function (response) { return response.text(); })
          .then(function (html) {
            // Show tooltip with value of UAH-geoserver layer
            var tooltip = document.getElementById('info');
            var tooltipContainer = document.getElementById('value_layer');

            if (html) {
              tooltip.innerHTML = html;
              tooltip.style.display = 'block';
              tooltip.style.left = evt.pixel[0] + 'px';
              tooltip.style.top = evt.pixel[1] + 'px';
              tooltipContainer.classList.remove('hidden'); // Remove hidden class from tooltipContainer
            } else {
              tooltipContainer.classList.add('hidden'); // Add hidden class to tooltipContainer
            }
          });
      }
    });
  }

  // Add MousePosition control if layer has 'antena' tag
  if (layerName.toLowerCase().includes('antena')) {
    /* var mousePositionControl = new ol.control.MousePosition({
      coordinateFormat: function (coord) {
        return ol.coordinate.format(coord, '{x}, {y}', 4);
      },
      projection: 'EPSG:4326',
      className: 'custom-mouse-position',
      target: document.getElementById('mouse-position'),
      undefinedHTML: '&nbsp;' */
    // se crea la feature select para capas de tipo antena
    var selectAntennas = new ol.interaction.Select({
      hitTolerance: 5,
      multi: true,
      condition: ol.events.condition.singleClick,
      layers: [layer],
    });

    //Se añade interacción en el mapa a la feature select para elementos de tipo antena
    map.addInteraction(selectAntennas);

    //Se configura e lcontrol de pop up para la select de tipo antena
    let popupAntennas = new ol.Overlay.PopupFeature({
      popupClass: 'default anim',
      select: selectAntennas,
      canFix: true,
      closeBox: true,
      template: {
        title:
          function (f) {
            return 'ANTENA: ' + getPopupTittle(f);//aqui se va a meter el texto del titulo
          },
        attributes:
        {
          'Numero': { title: 'Numero' },
          'UTM_X': { title: 'Latitud', after: 'º' },
          'UTM_Y': { title: 'Longitud', after: 'º' },

        }
      }
    });
    map.addOverlay(popupAntennas);
  }
});

/* map.addControl(mousePositionControl); */

// Add click event to MousePosition control
/* mousePositionControl.element.onclick = function () {
  var coord = mousePositionControl.lastMouseMoveEvent.coordinate;
  var viewResolution = map.getView().getResolution();
  var url = source.getFeatureInfoUrl(
    coord,
    viewResolution,
    'EPSG:3857',
    { 'INFO_FORMAT': 'application/json' }
  );
  if (url) {
    fetch(url)
      .then(function (response) { return response.json(); })
      .then(function (json) {
        // Do something with the JSON response
        console.log(json);
      });
  }
}; */
// Hide tooltip on map move
map.on('dbclick', function () {
  var tooltip = document.getElementById('info');
  tooltip.style.display = 'none';
});

var url = plink.getUrlParam('url');
var layerName = plink.getUrlParam('layer');
if (url) {
  cap.loadLayer(url, layerName);
}
