import { map,medrur1, medrur2, medrur3, medrur4, medrur5, medrur6 } from "./map-layers.js";

//Tooltips

// se crea la feature select para capas de tipo medida
var selectMeasure = new ol.interaction.Select({
    hitTolerance: 5,
    multi: true,
    condition: ol.events.condition.singleClick,
    layers: [medrur1, medrur2, medrur3, medrur4, medrur5, medrur6],
  });

  
  //Se añade interacción en el mapa a la feature select para elementos de tipo medida
  map.addInteraction(selectMeasure);

  
  //Se configura e lcontrol de pop up para la select de tipo medida 
  let popupMeasures = new ol.Overlay.PopupFeature({
    popupClass: 'default anim',
    select: selectMeasure,
    canFix: true,
    closeBox: true,
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
  
  function getPopupTittle(f) {
  
    if (f.getProperties().features[0].values_.Descripcio != undefined) {
      f.values_ = f.getProperties().features[0].values_;
      return f.values_.Descripcio;
    } else {
      f.values_ = f.getProperties().features[0].values_;
      return f.values_.Dirección
    }
  
  
  }