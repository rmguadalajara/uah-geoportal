import { map } from "./map-layers.js";
/* 
let width, height, extent;

fetch("../static/capas/raster.TIFF")
  .then(function (response) {
    return response.arrayBuffer();
  })
  .then(function (arrayBuffer) {
    return GeoTIFF.fromArrayBuffer(arrayBuffer);
  })
  .then(function (tiff) {
    return tiff.getImage();
  })
  .then(function (image) {
    width = image.getWidth();
    height = image.getHeight();
    extent = image.getBoundingBox();
    return image.readRGB();
  })
  .then(function (rgb) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    const data = context.getImageData(0, 0, width, height);
    const rgba = data.data;
    let j = 0;
    for (let i = 0; i < rgb.length; i += 3) {
      rgba[j] = rgb[i];
      rgba[j + 1] = rgb[i + 1];
      rgba[j + 2] = rgb[i + 2];
      rgba[j + 3] = 255;
      j += 4;
    }
    context.putImageData(data, 0, 0);

    map.addLayer(
      new ol.layer.Image({
        source: new ol.source.ImageStatic({
          url: canvas.toDataURL(),
          projection: "EPSG:27700",
          imageExtent: extent
        })
      })
    );
  }); */
