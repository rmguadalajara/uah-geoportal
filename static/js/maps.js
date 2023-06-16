



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
  const lyrname = eve.target.value;
  const checkedStatus = eve.target.checked;
  const lyrList = map.getLayers();

  lyrList.forEach(function (element) {
    if (lyrname == element.get('title')) {
      element.setVisible(checkedStatus);
    }
  });
}

/*Scaleline*/
const scale = new ol.control.ScaleLine({
});

map.addControl(scale)

/* Zoom control */
const zoom = new ol.control.ZoomSlider({
});

map.addControl(zoom)

/*Mouse position*/
const mousePos = new ol.control.MousePosition({
});
map.addControl(mousePos)

/* 
const displayFeatureInfo = function (pixel) {
  const features = [];
  map.forEachFeatureAtPixel(pixel, function (feature) {
    features.push(feature);
  });
  if (features.length > 0) {
    const info = [];
    let i, ii;
    for (i = 0, ii = features.length; i < ii; ++i) {
      info.push(features[i].get('Folder'));
      info.push(features[i].get('Punto'));
      info.push(features[i].get('Fecha'));
      info.push(features[i].get('Dirección'));
      info.push(features[i].get('Latitud'));
      info.push(features[i].get('Longitud'));
      info.push(features[i].get('Localizaci'));
      info.push(features[i].get('Visión_di'));
      info.push(features[i].get('Tipo_de_Te'));
      info.push(features[i].get('Conjunto'));
    }
    document.getElementById('info').innerHTML = info.join(', ') || '(unknown)';
    map.getTarget().style.cursor = 'pointer';
  } else {
    document.getElementById('info').innerHTML = '&nbsp;';
    map.getTarget().style.cursor = '';
  }
};

map.on('pointermove', function (evt) {
  if (evt.dragging) {
    return;
  }
  const pixel = map.getEventPixel(evt.originalEvent);
  displayFeatureInfo(pixel);
});

map.on('click', function (evt) {
  displayFeatureInfo(evt.pixel);
}); */

const typeSelect = document.getElementById('type');
const showSegments = document.getElementById('segments');
const clearPrevious = document.getElementById('clear');

const style = new  ol.style.Style({
  fill: new  ol.style.Fill({
    color: 'rgba(255, 255, 255, 0.2)',
  }),
  stroke: new ol.style.Stroke({
    color: 'rgba(0, 0, 0, 0.5)',
    lineDash: [10, 10],
    width: 2,
  }),
  image: new ol.style.Circle({
    radius: 5,
    stroke: new ol.style.Stroke({
      color: 'rgba(0, 0, 0, 0.7)',
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 255, 0.2)',
    }),
  }),
});

const labelStyle = new  ol.style.Style({
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
  image: new ol.style.RegularShape({
    radius: 8,
    points: 3,
    angle: Math.PI,
    displacement: [0, 10],
    fill: new ol.style.Fill({
      color: 'rgba(0, 0, 0, 0.7)',
    }),
  }),
});

const tipStyle = new ol.style.Style({
  text: new ol.style.Text({
    font: '12px Calibri,sans-serif',
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 255, 1)',
    }),
    backgroundFill: new ol.style.Fill({
      color: 'rgba(0, 0, 0, 0.4)',
    }),
    padding: [2, 2, 2, 2],
    textAlign: 'left',
    offsetX: 15,
  }),
});

const modifyStyle = new ol.style.Style({
  image: new ol.style.Circle({
    radius: 5,
    stroke: new ol.style.Stroke({
      color: 'rgba(0, 0, 0, 0.7)',
    }),
    fill: new ol.style.Fill({
      color: 'rgba(0, 0, 0, 0.4)',
    }),
  }),
  text: new ol.style.Text({
    text: 'Drag to modify',
    font: '12px Calibri,sans-serif',
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 255, 1)',
    }),
    backgroundFill: new ol.style.Fill({
      color: 'rgba(0, 0, 0, 0.7)',
    }),
    padding: [2, 2, 2, 2],
    textAlign: 'left',
    offsetX: 15,
  }),
});

const segmentStyle = new ol.style.Style({
  text: new ol.style.Text({
    font: '12px Calibri,sans-serif',
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 255, 1)',
    }),
    backgroundFill: new ol.style.Fill({
      color: 'rgba(0, 0, 0, 0.4)',
    }),
    padding: [2, 2, 2, 2],
    textBaseline: 'bottom',
    offsetY: -12,
  }),
  image: new ol.style.RegularShape({
    radius: 6,
    points: 3,
    angle: Math.PI,
    displacement: [0, 8],
    fill: new ol.style.Fill({
      color: 'rgba(0, 0, 0, 0.4)',
    }),
  }),
});

const segmentStyles = [segmentStyle];

const formatLength = function (line) {
  const length = ol.sphere.getLength(line);
  let output;
  if (length > 100) {
    output = Math.round((length / 1000) * 100) / 100 + ' km';
  } else {
    output = Math.round(length * 100) / 100 + ' m';
  }
  return output;
};

const formatArea = function (polygon) {
  const area = ol.sphere.getArea(polygon);
  let output;
  if (area > 10000) {
    output = Math.round((area / 1000000) * 100) / 100 + ' km\xB2';
  } else {
    output = Math.round(area * 100) / 100 + ' m\xB2';
  }
  return output;
};



const source = new ol.source.Vector();

const modify = new ol.interaction.Modify({source: source, style: modifyStyle});

let tipPoint;

function styleFunction(feature, segments, drawType, tip) {
  const styles = [style];
  const geometry = feature.getGeometry();
  const type = geometry.getType();
  let point, label, line;
  if (!drawType || drawType === type) {
    if (type === 'Polygon') {
      point = geometry.getInteriorPoint();
      label = formatArea(geometry);
      line = new ol.geom.LineString(geometry.getCoordinates()[0]);
    } else if (type === 'LineString') {
      point = new ol.geom.Point(geometry.getLastCoordinate());
      label = formatLength(geometry);
      line = geometry;
    }
  }
  if (segments && line) {
    let count = 0;
    line.forEachSegment(function (a, b) {
      const segment = new ol.geom.LineString([a, b]);
      const label = formatLength(segment);
      if (segmentStyles.length - 1 < count) {
        segmentStyles.push(segmentStyle.clone());
      }
      const segmentPoint = new ol.geom.Point(segment.getCoordinateAt(0.5));
      segmentStyles[count].setGeometry(segmentPoint);
      segmentStyles[count].getText().setText(label);
      styles.push(segmentStyles[count]);
      count++;
    });
  }
  if (label) {
    labelStyle.setGeometry(point);
    labelStyle.getText().setText(label);
    styles.push(labelStyle);
  }
  if (
    tip &&
    type === 'Point' &&
    !modify.getOverlay().getSource().getFeatures().length
  ) {
    tipPoint = geometry;
    tipStyle.getText().setText(tip);
    styles.push(tipStyle);
  }
  return styles;
}

const vector = new ol.layer.Vector({
  source: source,
  style: function (feature) {
    return styleFunction(feature, showSegments.checked);
  },
});

map.addLayer(vector);

map.addInteraction(modify);

let draw; // global so we can remove it later

function addInteraction() {
  const drawType = typeSelect.value;
  const activeTip =
    'Click to continue drawing the ' +
    (drawType === 'Polygon' ? 'polygon' : 'line');
  const idleTip = 'Click to start measuring';
  let tip = idleTip;
  draw = new ol.interaction.Draw({
    source: source,
    type: drawType,
    style: function (feature) {
      return styleFunction(feature, showSegments.checked, drawType, tip);
    },
  });
  draw.on('drawstart', function () {
    if (clearPrevious.checked) {
      source.clear();
    }
    modify.setActive(false);
    tip = activeTip;
  });
  draw.on('drawend', function () {
    modifyStyle.setGeometry(tipPoint);
    modify.setActive(true);
    map.once('pointermove', function () {
      modifyStyle.setGeometry();
    });
    tip = idleTip;
  });
  modify.setActive(true);
  map.addInteraction(draw);
}

typeSelect.onchange = function () {
  map.removeInteraction(draw);
  addInteraction();
};



showSegments.onchange = function () {
  vector.changed();
  draw.getOverlay().changed();
};

const checkbox = document.getElementById('active')

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    addInteraction();
  } else {
    map.removeInteraction(draw); 
  }
});

function eraseMeasurements(){
  var features = vector.getSource().getFeatures();
  features.forEach((feature) => {
    vector.getSource().removeFeature(feature);
  });
};
