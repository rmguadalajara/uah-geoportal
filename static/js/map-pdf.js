import { map } from "./map-layers.js";

const exportButton = document.getElementById('export-pdf');

const dims = {
    a0: [1189, 841],
    a1: [841, 594],
    a2: [594, 420],
    a3: [420, 297],
    a4: [297, 210],
    a5: [210, 148],
  };

exportButton.addEventListener(
  'click',
  function () {
    exportButton.disabled = true;
    document.body.style.cursor = 'progress';

    const format = document.getElementById('format').value;
    const resolution = document.getElementById('resolution').value;
    const dim = dims[format];
    const width = Math.round((dim[0] * resolution) / 25.4);
    const height = Math.round((dim[1] * resolution) / 25.4);
    const size = map.getSize();
    const viewResolution = map.getView().getResolution();

    map.once('rendercomplete', function () {
      const mapCanvas = document.createElement('canvas');
      mapCanvas.width = width;
      mapCanvas.height = height;
      const mapContext = mapCanvas.getContext('2d');
      Array.prototype.forEach.call(
        document.querySelectorAll('.ol-layer canvas'),
        function (canvas) {
          if (canvas.width > 0) {
            const opacity = canvas.parentNode.style.opacity;
            mapContext.globalAlpha = opacity === '' ? 1 : Number(opacity);
            const transform = canvas.style.transform;
            // Get the transform parameters from the style's transform matrix
            const matrix = transform
              .match(/^matrix\(([^\(]*)\)$/)[1]
              .split(',')
              .map(Number);
            // Apply the transform to the export map context
            CanvasRenderingContext2D.prototype.setTransform.apply(
              mapContext,
              matrix
            );
            mapContext.drawImage(canvas, 0, 0);
          }
        }
      );
      mapContext.globalAlpha = 1;
      mapContext.setTransform(1, 0, 0, 1, 0, 0);
      const pdf = new jspdf.jsPDF('landscape', undefined, format);
      pdf.addImage(
        mapCanvas.toDataURL('image/png'),
        'PNG',
        0,
        0,
        dim[0],
        dim[1]
      );
      pdf.save('map.pdf');
      // Reset original map size
      map.setSize(size);
      map.getView().setResolution(viewResolution);
      exportButton.disabled = false;
      document.body.style.cursor = 'auto';
    });

    // Set print size
    const printSize = [width, height];
    map.setSize(printSize);
    const scaling = Math.min(width / size[0], height / size[1]);
    map.getView().setResolution(viewResolution / scaling);
  },
  false
);
/* 
const exportButton = document.getElementById('export-pdf');

exportButton.addEventListener(
    'click',
    function () {

        var doc = new jsPDF();

        const source = $('#map')[0];

        const specialElementHandlers = {
            '#map': function (element, renderer) {
                return true
            }
        };

        doc.fromHTML(
            source,
            15,
            15,
            {
                'width': 170,
                'elementHandlers': specialElementHandlers
            }
        );
        doc.save('Area 5 map - alterations.pdf')

    }
); */