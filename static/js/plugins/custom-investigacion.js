
var url = $(location).attr('pathname');
paramURL = url.split('/');

if (paramURL [2] == "investigacion") {
	$(".header .navbar .container:first").append("<h1 class='tituloInvestigacion text-left margin-top-20'><a href='/es/investigacion/'>INVESTIGACIÓN Y TRANSFERENCIA</a></h1>");
}


	
if ($(".logoucrania").length == 0 ) {
		$(".header .navbar .container:first").prepend("<a href='https://www.uah.es/es/vivir-la-uah/participacion/cooperacion-voluntariado/la-uah-con-ucrania/' target='_blank'><img class='logoucrania' src='/.galleries/imagenes-estructura/CrueConUcrania_Color_RGB.png?__scale=w:350,h:85' alt='La CRUE en apoyo de Ucrania'></a>");
	}
