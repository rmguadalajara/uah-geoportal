/* SAGA SOLUCIONES: Tab Links Script
 * 
 * Script que se encarga de añadir un parametro a la URL para que podamos acceder directamente al contenido de una de las pestanas  o acordeon
 */
 
$("#header-container .header .navbar .container:first").prepend("<a href='https://www.uah.es/es/vivir-la-uah/participacion/cooperacion-voluntariado/la-uah-con-ucrania/' target='_blank'><img class='logoucrania' src='https://www.uah.es/.galleries/imagenes-estructura/CrueConUcrania_Color_RGB.png?__scale=w:350,h:85' alt='La CRUE en apoyo de Ucrania'></a>");

$(document).ready(function () {

	//Si al cargar viene un hash en la url, debemos abrir dicho tab
	var hash = document.location.hash;
	var ancla = hash.replace("&", "#");
	var anclas = ancla.split("#");
	var numAnclas = anclas.length - 1;
	var cont = 0;
	
	while (cont < numAnclas) {
		cont++;
		hash = "#".concat(anclas[cont]);
		var id = hash.replace('#','');
		if (hash) {
			//Comprobamos si es un tab el hash
			var idElement = $('a[href='+hash+']').attr('id');
			if(idElement.substr(0,4)=='tab-' || idElement.substr(0,10)=='accordion-') {
	
				//Para que el calculo del scroll funcione bien debemos quitar el efecto de la cabecera fija
				$('body').removeClass('header-fixed');
	
				//Forzamos a que se habra el tab indicado
				if ($('a[href=' + hash + ']').tab()[0].id.indexOf("tab-") == 0) {
					$('a[href=' + hash + ']').tab('show');
					
					//Hacemos el scrool hasta el elemento
					$('html, body').animate({scrollTop: $('#tab-' + id).offset().top - 20}, 2000);
		
					//Para que al hacer scrool vuelva a cargar la cabecera volvemos a darla de alta
					jQuery(window).scroll(function () {
						if (jQuery(window).scrollTop() > $('#tab-' + id).offset().top) {
							jQuery("body").addClass("header-fixed");
						}
					});
				} else if ($('a[href=' + hash + ']').tab()[0].id.indexOf("accordion-") == 0) {
					$(hash).addClass('show');
				}
	
				
			}else if(idElement.substr(0,9)=='collapse-') {
	
				//Para que el calculo del scroll funcione bien debemos quitar el efecto de la cabecera fija
				$('body').removeClass('header-fixed');
	
				//Miro si estoy dentro de un tab, y si no es el activo
				var idTab = $('#'+id).parents('.tab-pane:not(.active)').attr("id");
	
				if(idTab!=null){
					//Al estar en un tab oculto, primero debemos abrir el tab, y esperar a que termine de cargarse, para eso escuchamos el evento shown
					$('#tab-'+idTab).tab('show');
					$('#tab-'+idTab).on("shown.bs.tab", function (e) {
						//Le añadimos la clase in para que se despliegue el elemento correspondiente
						$('#' + id).addClass("in");
						$('#' + id).attr('aria-expanded', "true");
						$('#collapse-' + id + ' .fa').removeClass('fa-angle-down').addClass('fa-angle-up');
	
						//Hacemos el scrool hasta el elemento
						$('html, body').animate({scrollTop: $('#collapse-' + id).offset().top}, 2000);
	
						//Para que al hacer scrool vuelva a cargar la cabecera volvemos a darla de alta
						jQuery(window).scroll(function () {
							if (jQuery(window).scrollTop() > $('#collapse-' + id).offset().top) {
								jQuery("body").addClass("header-fixed");
							}
						});
						$('#tab-'+idTab).off("shown.bs.tab");
					});
				}else {
					//Le añadimos la clase in para que se despliegue el elemento correspondiente
					$('#' + id).addClass("in");
					$('#' + id).attr('aria-expanded', "true");
					$('#collapse-' + id + ' .fa').removeClass('fa-angle-down').addClass('fa-angle-up');
	
					//Hacemos el scrool hasta el elemento
					$('html, body').animate({scrollTop: $('#collapse-' + id).offset().top}, 2000);
	
					//Para que al hacer scrool vuelva a cargar la cabecera volvemos a darla de alta
					jQuery(window).scroll(function () {
						if (jQuery(window).scrollTop() > $('#collapse-' + id).offset().top) {
							jQuery("body").addClass("header-fixed");
						}
					});
				}
			}
		}
	}

	// Capturamos el evento de cambio de pestana para cambiar el hash en la url
	$("a[data-toggle='tab']").on("show.bs.tab", function (e) {
		var hash = $(e.target).attr("href");
		if (hash.substr(0,1) == "#") {
			if(history.pushState) {
				history.pushState(null, null, '#'+hash.substr(1));
			}
			else {
				location.replace("#" + hash.substr(1));
			}
		}
	});

	// Capturamos el evento de cambio en el acordeon y cambiamos el hash de la url
	$(".sg-tabs .panel-collapse").on("shown.bs.collapse", function (e) {

		//Cambiamos el hash en la url
		var hash = $(e.target).attr("id");

		if(history.pushState) {
			history.pushState(null, null, '#'+hash);
		}
		else {
			location.replace("#" + hash);
		}

		//Para que el calculo del scroll funcione bien debemos quitar el efecto de la cabecera fija
		$('body').removeClass('header-fixed');

		//Hacemos scrool al inicio del tab que se ha desplegado
		var clickedHeader = $(this).parents().find('.panel > .in').closest('.panel').find('.panel-heading');
		var offset = clickedHeader.offset();
		var top = $(window).scrollTop();
		if(offset) {
			var topOfHeader = offset.top;
			console.log(topOfHeader+"<"+top);
			if(topOfHeader < top) {
				$('html,body').animate({ scrollTop: topOfHeader - 20}, 500);
			}
		}

	});
	// Para el boton de volver a menu en la version de menu de indice

	$(".sg-tabs").on("click",".back-to-menu", function (e) {
		var menuobject = $(e.delegateTarget).find('.menu-ind-v1');
		//Hacemos el scrool hasta el elemento
		$('html, body').animate({scrollTop: $(menuobject).offset().top - 20}, 700);
	});
	
});


