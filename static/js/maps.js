
//icon image style
var iconStyle = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 30],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '../static/images/ante2.png',
  }),
});

var iconStyleRural1 = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 30],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '../static/images/icoPoints/icorural.png',
  }),
});

var iconStyleRural2 = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 30],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '../static/images/icoPoints/icorural6.png',
  }),
});

var iconStyleUr1 = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 30],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '../static/images/icoPoints/icour1.png',
  }),
});

var iconStyleUr2 = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 30],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '../static/images/icoPoints/icour2.png',
  }),
});

var iconStyleUr3 = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 30],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '../static/images/icoPoints/icour3.png',
  }),
});

var iconStyleUr4 = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 30],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '../static/images/icoPoints/icour4.png',
  }),
});

var StyleMalla = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: [255, 147, 0],
    width: 1,
    lineJoin: 'round',
    lineCap: 'round',
  })
});

var StyleLimite = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: [255, 147, 0],
    width: 3,
    lineJoin: 'round',
    lineCap: 'round',
  })
});

var StyleMunicipal = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: [255, 197, 0],
    width: 3,
    lineJoin: 'round',
    lineCap: 'round',
  })
});

/* ../static/capas */
const antenas = new ol.layer.Vector({
  title: "Antenas",
  source: new ol.source.Vector({
    url: "../static/capas/Antenas_Meco.kml",
    format: new ol.format.KML({
      extractStyles: false,
    }),
  }),
  style: function (feature) {
    return iconStyle;
  },
});

const limitmun = new ol.layer.Vector({
  title: "Límites Muncipales",
  source: new ol.source.Vector({
    url: "../static/capas/Limites_Mun_Meco.kml",
    format: new ol.format.KML({
      extractStyles: false,
    }),
  }),
  style: function (feature) {
    return StyleLimite;
  },
});

const limiturb = new ol.layer.Vector({
  title: "Límites Urbanos",
  source: new ol.source.Vector({
    url: "../static/capas/Limites_Urbs_Meco.kml",
    format: new ol.format.KML({
      extractStyles: false,
    }),
  }),
  style: function (feature) {
    return StyleMunicipal;
  },
});

const medrur1 = new ol.layer.Vector({
  title: "Conjunto de Medidas 1",
  source: new ol.source.Vector({
    url: "../static/capas/med1.kml",
    format: new ol.format.KML({
      extractStyles: false,
    }),
  }),
  style: function (feature) {
    return iconStyleUr1;
  },
});

const medrur2 = new ol.layer.Vector({
  title: "Conjunto de Medidas 2",
  source: new ol.source.Vector({
    url: "../static/capas/med2.kml",
    format: new ol.format.KML({
      extractStyles: false,
    }),
  }),
  style: function (feature) {
    return iconStyleUr2;
  },
});

const medrur3 = new ol.layer.Vector({
  title: "Conjunto de Medidas 3",
  source: new ol.source.Vector({
    url: "../static/capas/med3.kml",
    format: new ol.format.KML({
      extractStyles: false,
    }),
  }),
  style: function (feature) {
    return iconStyleUr3;
  },
});

const medrur4 = new ol.layer.Vector({
  title: "Conjunto de Medidas 4",
  source: new ol.source.Vector({
    url: "../static/capas/med4.kml",
    format: new ol.format.KML({
      extractStyles: false,
    }),
  }),
  style: function (feature) {
    return iconStyleUr4;
  },
});

const medrur5 = new ol.layer.Vector({
  title: "Conjunto de Medidas 5",
  source: new ol.source.Vector({
    url: "../static/capas/med5.kml",
    format: new ol.format.KML({
      extractStyles: false,
    }),
  }),
  style: function (feature) {
    return iconStyleRural1;
  },
});

const medrur6 = new ol.layer.Vector({
  title: "Conjunto de Medidas 6",
  source: new ol.source.Vector({
    url: "../static/capas/med6.kml",
    format: new ol.format.KML({
      extractStyles: false,
    }),
  }),
  style: function (feature) {
    return iconStyleRural2;
  },
});

var rasterLayer = new ol.layer.Image({
  source: new ol.source.ImageStatic({
    url: '../static/capas/int_conj2.tif', // Reemplace 'ruta/al/archivo.tif' con la URL de su archivo TIF.
    projection: 'EPSG:4326', // Reemplace 'EPSG:4326' con el código de proyección de su archivo TIF.
    imageExtent: [-100, -50, 100, 50] // Especifique el rango de coordenadas de su archivo TIF.
  })
});



const medrur7 = new ol.layer.Vector({
  title: "Conjunto de Medidas 7",
  source: new ol.source.Vector({
    url: "../static/capas/med7.kml",
    format: new ol.format.KML(),
  }),
});

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

var draws = new ol.layer.Vector({
  source: new ol.source.Vector({
    visible: true,
  }),
  style: new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 255, 0.2)'
    }),
    stroke: new ol.style.Stroke({
      color: '#ffcc33',
      width: 2
    }),
    image: new ol.style.Circle({
      radius: 7,
      fill: new ol.style.Fill({
        color: '#ffcc33'
      })
    })
  })
});


/* MAPA */
var map = new ol.Map({
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
    antenas, limitmun, limiturb, medrur1, medrur2, medrur3, medrur4, medrur5, medrur6, malla
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-3.329501, 40.551952]),
    zoom: 14,
  }),
});

/*Bar */
var sidebar = L.control.sidebar("sidebar", {
  position: 'right'
});

sidebar.addTo(map);

/*Layerswitcher*/
const layerSwitcher = new LayerSwitcher({
  reverse: true,
  groupSelectStyle: 'group'
});

map.addControl(layerSwitcher);

layerSwitcher.showPanel();

function toggleLayer(eve) {
  var lyrname = eve.target.value;
  var checkedStatus = eve.target.checked;
  var lyrList = map.getLayers();

  lyrList.forEach(function (element) {
    if (lyrname == element.get('title')) {
      element.setVisible(checkedStatus);
    }
  });
}

/*Scaleline*/
var scale = new ol.control.ScaleLine({
});

map.addControl(scale)

/* Zoom control */
var zoom = new ol.control.ZoomSlider({
});

map.addControl(zoom)

/*Mouse position*/
var mousePos = new ol.control.MousePosition({
});
map.addControl(mousePos)

