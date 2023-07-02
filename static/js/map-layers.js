const distanceInput = 40;
const mindistanceInput = 20;



//Se declara estilo de icono a incrustar en capa vectorial antenas
const iconStyle = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 30],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '../static/images/ante2.png',
  }),
});

//Se declara estilo de icono a incrustar en capa vectorial conjunto de medidas 5
const iconStyleRural1 = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 30],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '../static/images/icoPoints/icorural.png',
  }),
});

//Se declara estilo de icono a incrustar en capa vectorial conjunto de medidas 6
const iconStyleRural2 = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 30],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '../static/images/icoPoints/icorural6.png',
  }),
});

//Se declara estilo de icono a incrustar en capa vectorial conjunto de medidas 1
const iconStyleUr1 = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 30],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '../static/images/icoPoints/icour1.png',
  }),
});

//Se declara estilo de icono a incrustar en capa vectorial conjunto de medidas 2
const iconStyleUr2 = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 30],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '../static/images/icoPoints/icour2.png',
  }),
});

//Se declara estilo de icono a incrustar en capa vectorial conjunto de medidas 3
const iconStyleUr3 = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 30],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '../static/images/icoPoints/icour3.png',
  }),
});

//Se declara estilo de icono a incrustar en capa vectorial conjunto de medidas 4
const iconStyleUr4 = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 30],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '../static/images/icoPoints/icour4.png',
  }),
});

//Se declara estilo de malla de muestreo urbaana
const StyleMalla = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: [255, 147, 0],
    width: 1,
    lineJoin: 'round',
    lineCap: 'round',
  })
});

//Se declara estilo de limite municipal
const StyleLimiteMunicipal = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: [255, 147, 0],
    width: 3,
    lineJoin: 'round',
    lineCap: 'round',
  })
});

//Se declara estilo de limite urbano
const StyleLimiteUrbano = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: [255, 197, 0],
    width: 3,
    lineJoin: 'round',
    lineCap: 'round',
  })
});

//se declara capa de anteenas a partir de fichero kml y estilo declarado anteriormente
const antenas = new ol.layer.Vector({
  title: "Antenas",
  source: new ol.source.Cluster({
    distance: distanceInput,
    minDistance: mindistanceInput,
    source: new ol.source.Vector({
      url: "../static/capas/Antenas_Meco.kml",
      format: new ol.format.KML({
        extractStyles: false,
      }),
    }),
  }),
  style: function (feature) {
    return iconStyle;
  },
});

//se declara capa de limites municipales a partir de fichero kml y estilo declarado anteriormente
const limitmun = new ol.layer.Vector({
  title: "Límites Muncipales",
  source: new ol.source.Vector({
    url: "../static/capas/Limites_Mun_Meco.kml",
    format: new ol.format.KML({
      extractStyles: false,
    }),
  }),
  style: function (feature) {
    return StyleLimiteMunicipal;
  },
});

//se declara capa de limite urbano a partir de fichero kml y estilo declarado anteriormente
const limiturb = new ol.layer.Vector({
  title: "Límites Urbanos",
  source: new ol.source.Vector({
    url: "../static/capas/Limites_Urbs_Meco.kml",
    format: new ol.format.KML({
      extractStyles: false,
    }),
  }),
  style: function (feature) {
    return StyleLimiteUrbano;
  },
});

//se declara capa de conjunto de medidas1 a partir de fichero kml y estilo declarado anteriormente
const medrur1 = new ol.layer.Vector({
  title: "Conjunto de Medidas 1",
  source: new ol.source.Cluster({
    distance: distanceInput,
    minDistance: mindistanceInput,
    source: new ol.source.Vector({
      url: "../static/capas/med1.kml",
      format: new ol.format.KML({
        extractStyles: false,
      }),
    }),
  }),
  style: function (feature) {
    return iconStyleUr1;
  },
});

//se declara capa de conjunto de medidas2 a partir de fichero kml y estilo declarado anteriormente
const medrur2 = new ol.layer.Vector({
  title: "Conjunto de Medidas 2",
  source: new ol.source.Cluster({
    distance: distanceInput,
    minDistance: mindistanceInput,
    source: new ol.source.Vector({
      url: "../static/capas/med2.kml",
      format: new ol.format.KML({
        extractStyles: false,
      }),
    }),
  }),
  style: function (feature) {
    return iconStyleUr2;
  },
});

//se declara capa de conjunto de medidas3 a partir de fichero kml y estilo declarado anteriormente
const medrur3 = new ol.layer.Vector({
  title: "Conjunto de Medidas 3",
  source: new ol.source.Cluster({
    distance: distanceInput,
    minDistance: mindistanceInput,
    source: new ol.source.Vector({
      url: "../static/capas/med3.kml",
      format: new ol.format.KML({
        extractStyles: false,
      }),
    }),
  }),
  style: function (feature) {
    return iconStyleUr3;
  },
});

//se declara capa de conjunto de medidas4 a partir de fichero kml y estilo declarado anteriormente
const medrur4 = new ol.layer.Vector({
  title: "Conjunto de Medidas 4",
  source: new ol.source.Cluster({
    distance: distanceInput,
    minDistance: mindistanceInput,
    source: new ol.source.Vector({
      url: "../static/capas/med4.kml",
      format: new ol.format.KML({
        extractStyles: false,
      }),
    }),
  }),
  style: function (feature) {
    return iconStyleUr4;
  },
});

//se declara capa de conjunto de medidas5 a partir de fichero kml y estilo declarado anteriormente
const medrur5 = new ol.layer.Vector({
  title: "Conjunto de Medidas 5",
  source: new ol.source.Cluster({
    distance: distanceInput,
    minDistance: mindistanceInput,
    source: new ol.source.Vector({
      url: "../static/capas/med5.kml",
      format: new ol.format.KML({
        extractStyles: false,
      }),
    }),
  }),
  style: function (feature) {
    return iconStyleRural1;
  },
});

//se declara capa de conjunto de medidas6 a partir de fichero kml y estilo declarado anteriormente
const medrur6 = new ol.layer.Vector({
  title: "Conjunto de Medidas 6",
  source: new ol.source.Cluster({
    distance: distanceInput,
    minDistance: mindistanceInput,
    source: new ol.source.Vector({
      url: "../static/capas/med6.kml",
      format: new ol.format.KML({
        extractStyles: false,
      }),
    }),
  }),
  style: function (feature) {
    return iconStyleRural2;
  },
});

//se declara capa de conjunto de medidas7 a partir de fichero kml y estilo declarado anteriormente
const medrur7 = new ol.layer.Vector({
  title: "Conjunto de Medidas 7",
  source: new ol.source.Cluster({
    distance: distanceInput,
    minDistance: mindistanceInput,
    source: new ol.source.Vector({
      url: "../static/capas/med7.kml",
      format: new ol.format.KML({
        extractStyles: false,
      }),
    }),
  }),
});


//se declara capa de tipo raster con origen en imagen tif
/* const rasterLayer = new ol.layer.Image({
  source: new ol.source.ImageStatic({
    title: 'NEW RASTER',
    url: '../static/capas/int_conj2.tif', // Reemplace 'ruta/al/archivo.tif' con la URL de su archivo TIF.
    projection: 'EPSG:25830', // Reemplace 'EPSG:4326' con el código de proyección de su archivo TIF.
    imageExtent: [471142.0985000000218861,4487822.0552000002935529, 473150.5985000000218861,4490156.5552000002935529] // Especifique el rango de coordenadas de su archivo TIF.
  })
}); */



//Se declara capa vectorial con la malla para el muestreo
const malla = new ol.layer.Vector({
  title: "Malla de Muestreo Urbana",
  source: new ol.source.Vector({
    url: "../static/capas/Malla_muestreo.kml",
    format: new ol.format.KML({
      extractStyles: false,
    }),
    visible: true,
  }),
  style: function (feature) {
    return StyleMalla;
  },
});



const geoServerWMSITiledLayers =
  new ol.layer.Tile({
    title: 'raster tiled',
    source: new ol.source.TileWMS({
      url: 'http://localhost:8080/geoserver/uah/wms',
      params: { 'layers': 'uah:int_conj2' },
      serverType: 'geoserver',
      transition: 0,
    }),
  });

const geoServerWMSImageLayers =
  new ol.layer.Image({
    title: 'raster image',
    source: new ol.source.ImageWMS({
      extent: [-13884991, 2870341, -7455066, 6338219],
      url: 'http://localhost:8080/geoserver/uah/wms',
      params: { 'LAYERS': 'uah:int_conj2' },
      serverType: 'geoserver',
      ratio: 1,
    }),
  });

const opacityInput = document.getElementById('opacity-input');
const opacityOutput = document.getElementById('opacity-output');
function update() {
  const opacity = parseFloat(opacityInput.value);
  geoServerWMSITiledLayers.setOpacity(opacity);
  opacityOutput.innerText = opacity.toFixed(2);
}
opacityInput.addEventListener('input', update);
update();

//SE declara mapa con tres Tiles, y se le añaden las capas declaradas anterioremente
export const map = new ol.Map({
  target: "map",
  layers: [
    new ol.layer.Group({
      title: 'Base map',
      layers: [
        new ol.layer.Tile({
          title: "Open Street Map",
          visible: true,
          source: new ol.source.OSM(),
        }),

        new ol.layer.Tile({
          title: "PNOA",
          source: new ol.source.XYZ({
            url: 'https://tms-pnoa-ma.idee.es/1.0.0/pnoa-ma/{z}/{x}/{-y}.jpeg'
          })
        }),
        new ol.layer.Tile({
          title: "Híbrido",
          source: new ol.source.XYZ({
            url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
          })
        }),


      ]
    }),
    geoServerWMSImageLayers, geoServerWMSITiledLayers, antenas, limitmun, limiturb, medrur1, medrur2, medrur3, medrur4, medrur5, medrur6, malla
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-3.329501, 40.551952]),

    zoom: 14,
  }),
});



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
        return getPopupTittle(f);//aqui se va a meter el texto
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
        return getPopupTittle(f);//aqui se va a meter el texto del titulo
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
