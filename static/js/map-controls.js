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
  
  //SE declara elemento de posicion del raton
  const mousePos = new ol.control.MousePosition({
  });
  
  //Se añade control al mapa para gestionar posicion el raton
  map.addControl(mousePos)