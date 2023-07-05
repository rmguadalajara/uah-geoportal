/* ===========================================================
 * Demo js
 * ========================================================== */


$(document).ready(function () {

    // para que en el menu responsive si haces click en una seccion por debajo de otra desplegada muy extensa haga scrolltop hasta la que has hecho click	
    // para cargar el overlay de fondo en el menu responsive
    
        $('.responsive .panel-group').on('shown.bs.collapse', function (e) {	
        
          var clickedHeader = $(this).find('.panel > .in').closest('.panel').find('.bullet');
          var offset = clickedHeader.offset();
          var top = $(window).scrollTop();
          if(offset) {
            var topOfHeader = offset.top;
            if(topOfHeader < top) {
              $('html,body').animate({ scrollTop: topOfHeader}, 100, 'swing');
            }
          }		
        });
    
        // PARA CAMBIAR EL ICONO DE DESPLIEGUE DE MENU
    
        $('.header-responsive .to-menu').click( function () {
            var clase = $(this).attr('class');
            if (clase == 'navbar-brand to-menu' || clase == 'navbar-brand to-menu collapsed'){
                $('.overlay-menu-responsive').fadeIn();
                $(this).addClass('shown');
                $(this).find('.fa').removeClass('fa-reorder').addClass('fa-close');
            }
            else {
                $('.overlay-menu-responsive').fadeOut();
                $(this).removeClass('shown');
                $(this).find('.fa').removeClass('fa-close').addClass('fa-reorder');
            }
        });
            
    
    // asignar alto del div padre al hijo en el elemento super destacado del listado de la home
    
        var parentcentradoVertical = $('.list-element-super > div');
        if(parentcentradoVertical.length > 0) {
            var soncentradoVertical = $('.list-element-super > div > .wrapper-content');
            var heightcentrado = parentcentradoVertical.outerHeight();
            soncentradoVertical.height(heightcentrado);
            parentcentradoVertical.height(heightcentrado);
        }else{}
    
    
    // Para que añadir clases al enlace que despliega los menus principales y poder darle estilos específicos   
    
    $('#menu-header .bullet').click( function () {
        $('.main-menu-collapse.in').collapse('hide');	
        var element = $(this).attr('href');
        var clase = $(this).attr('class');
        $('element').collapse('show');
        if (clase == 'bullet' || clase == 'bullet collapsed'){
            $('#menu-header .bullet').removeClass('showing');
            $(this).addClass('showing');
        }
        else {
            $('#menu-header .bullet').removeClass('showing');
        }
    
    });
    
    // PARA CAMBIAR LA ORIENTACION DE LA FLECHA DE DESPLIEGUE EN ACCORDION
    
        $('.panel').on('show.bs.collapse', function () {
            $(this).parent().find('.panel-title.open').removeClass('open');
            $(this).parent().find('.fa-angle-up').removeClass('.fa-angle-up').addClass('fa-angle-down');
            $(this).find('.panel-title').addClass('open');
            $(this).find('.panel-title .fa').removeClass('fa-angle-down').addClass('fa-angle-up');
        })
    
        $('.panel').on('hide.bs.collapse', function () {
            $(this).find('.panel-title').removeClass('open');
            $(this).find('.panel-title .fa').removeClass('fa-angle-up').addClass('fa-angle-down');
        })
        
    // PARA LLAMAR A UN TAB O A UN ACCORDION DESDE UN ENLACE EXTERNO
    
        $('.gotab').click(function (e) {
            var anchor = $(this).attr('href');
            var bullet= $('a[href="'+anchor+'"][data-toggle="tab"]');
            $(bullet).click();
        });
        $('.goaccordion').click(function (e) {
            var anchor = $(this).attr('href');
            var bullet= $('a[href="'+anchor+'"][data-toggle="collapse"]');
            //Para que el calculo del scroll funcione bien debemos quitar el efecto de la cabecera fija
            $('body').removeClass('header-fixed');
            $(bullet).click();
            $('html, body').animate({scrollTop: $(bullet).offset().top - 60}, 2000);
            //Para que al hacer scrool vuelva a cargar la cabecera volvemos a darla de alta
            jQuery(window).scroll(function () {
                if (jQuery(window).scrollTop() > $(bullet).offset().top) {
                    jQuery("body").addClass("header-fixed");
                }
            });		
        });
    });
    
    $(window).load(function() {
        
        // Apply the styles
        $(".home .sg-freehtml #twitter-widget-0").contents().find('head').append('<style>a{color: #4765a0;}.customisable:hover, .customisable:focus, .customisable:active, .customisable-highlight:hover, .customisable-highlight:focus, a:hover .customisable-highlight, a:focus .customisable-highlight {color: #000;}</style>');	
        
    });
    
    $(document).ready(function(){
        $("a[href='/es/investigacion/organizacion/vicerrectorado-de-investigacion-y-transferencia']").attr('href', 'https://www.uah.es/es/conoce-la-uah/organizacion-y-gobierno/equipo-de-direccion/Vicerrector-de-Investigacion-y-Transferencia/');
    });