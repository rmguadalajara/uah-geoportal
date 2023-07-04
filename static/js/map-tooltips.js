import { map,medrur1, medrur2, medrur3, medrur4, medrur5, medrur6,antenas } from "./map-layers.js";

//Tooltips

// se crea la feature select para capas de tipo medida
var selectMeasure = new ol.interaction.Select({
    hitTolerance: 5,
    multi: true,
    condition: ol.events.condition.singleClick,
    layers: [medrur1, medrur2, medrur3, medrur4, medrur5, medrur6],
  });
  
  // se crea la feature select para capas de tipo antena
  var selectAntennas = new ol.interaction.Select({
    hitTolerance: 5,
    multi: true,
    condition: ol.events.condition.singleClick,
    layers: [antenas],
  });
  
  //Se añade interacción en el mapa a la feature select para elementos de tipo medida
  map.addInteraction(selectMeasure);
  
  //Se añade interacción en el mapa a la feature select para elementos de tipo antena
  map.addInteraction(selectAntennas);
  
  //Se configura e lcontrol de pop up para la select de tipo medida 
  let popupMeasures = new ol.Overlay.PopupFeature({
    popupClass: 'default anim',
    select: selectMeasure,
    canFix: true,
    template: {
      title:
        function (f) {
          return 'MEDIDA: ' + getPopupTittle(f);//aqui se va a meter el texto
        },
      attributes:
      {
        'Fecha': { title: 'Fecha' },
        'Dirección': { title: 'Dirección' },
        'Latitud': { title: 'Latitud', after: 'º' },
        'Longitud': { title: 'Longitud', after: 'º' },
        'Valor': { title: 'Valor', after: ' V/m' },
        'Localizaci': { title: 'Localización' },
        'Visión_di': { title: 'Visión directa' },
        'Tipo_de_Te': { title: 'Tipo de Terreno' },
        'Conjunto': { title: 'Conjunto' },
      }
    }
  });
  map.addOverlay(popupMeasures);
  
  //Se configura e lcontrol de pop up para la select de tipo antena
  let popupAntennas = new ol.Overlay.PopupFeature({
    popupClass: 'default anim',
    select: selectAntennas,
    canFix: true,
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
  
  function getPopupTittle(f) {
  
    if (f.getProperties().features[0].values_.Descripcio != undefined) {
      f.values_ = f.getProperties().features[0].values_;
      return f.values_.Descripcio;
    } else {
      f.values_ = f.getProperties().features[0].values_;
      return f.values_.Dirección
    }
  
  
  }