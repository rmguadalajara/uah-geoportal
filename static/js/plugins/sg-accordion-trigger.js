/*
 Saga Suite Accordion Trigger:
  Cambia el icono de despliegue o pliegue en cualquier accordionde bootstrap
*/
$(document).ready(function () {
	$(function() {
		//Capturamos el evento justo al mostrar un nuevo bloque del acordeon
		$('.panel').on('shown.bs.collapse', function () {
			//Buscamos el icono con la flecha hacia abajo y la cambiamos por una hacia arriba
			$(this).find('.panel-heading .fa.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
		});

		//Capturamos el evento justo al ocultar un bloque
		$('.panel').on('hidden.bs.collapse', function () {
			//Buscamos el icono hacia arriba y lo cambiamos por uno hacia abajo
			$(this).find('.panel-heading .fa.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
		});
	});
});