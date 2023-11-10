const distanceInput = 40;
const mindistanceInput = 20;


let projectionName = "EPSG:25830";
proj4.defs(projectionName, "+proj=utm +zone=30 +ellps=ETRS89 +units=m +no_defs");
ol.proj.proj4.register(proj4);

let projection = ol.proj.get(projectionName);
projection.setExtent([-1099677.548488217,3011748.0230924687,1295248.9757446367,4998012.783793152]);


//Se declara estilo de icono a incrustar en capa vectorial conjunto de medidas 5
const iconStyleRural1 = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 30],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'static/images/icoPoints/icorural.png',
    crossOrigin: 'Anonymous',
  }),
});

//Se declara estilo de icono a incrustar en capa vectorial conjunto de medidas 6
const iconStyleRural2 = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 30],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'static/images/icoPoints/icorural6.png',
    crossOrigin: 'Anonymous',
  }),
});

//Se declara estilo de icono a incrustar en capa vectorial conjunto de medidas 1
const iconStyleUr1 = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 30],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'static/images/icoPoints/icour1.png',
    crossOrigin: 'Anonymous',
  }),
});

//Se declara estilo de icono a incrustar en capa vectorial conjunto de medidas 2
const iconStyleUr2 = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 30],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'static/images/icoPoints/icour2.png',
    crossOrigin: 'Anonymous',
  }),
});

//Se declara estilo de icono a incrustar en capa vectorial conjunto de medidas 3
const iconStyleUr3 = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 30],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'static/images/icoPoints/icour3.png',
    crossOrigin: 'Anonymous',
  }),
});

//Se declara estilo de icono a incrustar en capa vectorial conjunto de medidas 4
const iconStyleUr4 = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 30],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'static/images/icoPoints/icour4.png',
    crossOrigin: 'Anonymous',
  }),
});

//Se declara estilo de malla de muestreo urbaana
const StyleMalla = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: [255, 147, 0],
    width: 1,
    lineJoin: 'round',
    lineCap: 'round',
    crossOrigin: 'Anonymous',
  })
});

//Se declara estilo de limite municipal
const StyleLimiteMunicipal = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: [255, 147, 0],
    width: 3,
    lineJoin: 'round',
    lineCap: 'round',
    crossOrigin: 'Anonymous',
  })
});

//Se declara estilo de limite urbano
const StyleLimiteUrbano = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: [255, 197, 0],
    width: 3,
    lineJoin: 'round',
    lineCap: 'round',
    crossOrigin: 'Anonymous',
  })
});

//se declara capa de conjunto de medidas1 a partir de fichero kml y estilo declarado anteriormente
export const medrur1 = new ol.layer.Vector({
  title: "Campaña de Medidas 1",
  source: new ol.source.Cluster({
    distance: distanceInput,
    minDistance: mindistanceInput,
    source: new ol.source.Vector({
      url: "static/capas/med1.kml",
      format: new ol.format.KML({
        extractStyles: false,
      }),
      projection: projection,
      crossOrigin: 'Anonymous',
    }),
    projection: projection,
  }),
  style: function (feature) {
    return iconStyleUr1;
  },
});

//se declara capa de conjunto de medidas2 a partir de fichero kml y estilo declarado anteriormente
export const medrur2 = new ol.layer.Vector({
  title: "Campaña de Medidas 2",
  source: new ol.source.Cluster({
    distance: distanceInput,
    minDistance: mindistanceInput,
    source: new ol.source.Vector({
      url: "static/capas/med2.kml",
      format: new ol.format.KML({
        extractStyles: false,
      }),
      crossOrigin: 'Anonymous',
    }),
  }),
  projection: projection,
  style: function (feature) {
    return iconStyleUr2;
  },
});

//se declara capa de conjunto de medidas3 a partir de fichero kml y estilo declarado anteriormente
export const medrur3 = new ol.layer.Vector({
  title: "Campaña de Medidas 3",
  source: new ol.source.Cluster({
    distance: distanceInput,
    minDistance: mindistanceInput,
    source: new ol.source.Vector({
      url: "static/capas/med3.kml",
      format: new ol.format.KML({
        extractStyles: false,
      }),
      crossOrigin: 'Anonymous',
    }),
  }),
  projection: projection,
  style: function (feature) {
    return iconStyleUr3;
  },
});

//se declara capa de conjunto de medidas4 a partir de fichero kml y estilo declarado anteriormente
export const medrur4 = new ol.layer.Vector({
  title: "Campaña de Medidas 4",
  source: new ol.source.Cluster({
    distance: distanceInput,
    minDistance: mindistanceInput,
    source: new ol.source.Vector({
      url: "static/capas/med4.kml",
      format: new ol.format.KML({
        extractStyles: false,
      }),
    }),
  }),
  projection: projection,
  style: function (feature) {
    return iconStyleUr4;
  },
});

//se declara capa de conjunto de medidas5 a partir de fichero kml y estilo declarado anteriormente
export const medrur5 = new ol.layer.Vector({
  title: "Campaña de Medidas 5",
  source: new ol.source.Cluster({
    distance: distanceInput,
    minDistance: mindistanceInput,
    source: new ol.source.Vector({
      url: "static/capas/med5.kml",
      format: new ol.format.KML({
        extractStyles: false,
      }),
      
      crossOrigin: 'Anonymous',
    }),
  }),
  projection: projection,
  style: function (feature) {
    return iconStyleRural1;
  },
});

//se declara capa de conjunto de medidas6 a partir de fichero kml y estilo declarado anteriormente
export const medrur6 = new ol.layer.Vector({
  title: "Campaña de Medidas 6",
  source: new ol.source.Cluster({
    distance: distanceInput,
    minDistance: mindistanceInput,
    source: new ol.source.Vector({
      url: "static/capas/med6.kml",
      format: new ol.format.KML({
        extractStyles: false,
      }),
      crossOrigin: 'Anonymous',
    }),
  }),
  projection: projection,
  style: function (feature) {
    return iconStyleRural2;
  },
});


//Se agrupan por limpieza visual en el layer switcher
const campañasDeMedidasGroup =   new ol.layer.Group({
  title: 'Campañas de medidas',
   layers: [ medrur6, medrur5, medrur4, medrur3,medrur2,medrur1],
});


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
          source: new ol.source.OSM({
            crossOrigin: 'Anonymous',
            
          }),
        }),

/*         new ol.layer.Tile({
          title: "PNOA",
          source: new ol.source.XYZ({
            url: 'https://tms-pnoa-ma.idee.es/1.0.0/pnoa-ma/{z}/{x}/{-y}.jpeg',
            crossOrigin: 'Anonymous',
            
          }),
          projection: projection,
          crossOrigin: 'Anonymous',
        }), */
        new ol.layer.Tile({
          title: "Híbrido",
          source: new ol.source.XYZ({
            url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}',
            crossOrigin: 'Anonymous',
            
          }),
          projection: projection,
        }),


      ]
    }),
      limitmun, limiturb, medrur1, medrur2, medrur3, medrur4, medrur5, medrur6, malla

  ],
  view: new ol.View({
    projection: projection,
    zoom: 14,
    center: ol.proj.fromLonLat([-3.329501, 40.551952]),
    
  }),
});


