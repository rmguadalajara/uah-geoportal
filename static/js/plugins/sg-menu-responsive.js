$(document).ready(function(){


    $(".menu.responsive .bullet").click(function(event){
    
    
    var clase = $(this).attr('class');
    
    var elemfather = $(this).parent();
    
    
    $(".menu.responsive .bullet").children("i").removeClass('fa-angle-up');
    
    $(".menu.responsive .bullet").children("i").addClass('fa-angle-down');
    
    $(".menu.responsive .bullet").parent("li").removeClass('open');
    
    $(".menu.responsive .bullet").parent("li").addClass('closed');
    
    
    if(clase.indexOf('collapsed')==-1){
    
    $(elemfather).removeClass('open');
    
    $(elemfather).addClass('closed');
    
    }else{
    
    $(this).children("i").removeClass('fa-angle-down');
    
    $(this).children("i").addClass('fa-angle-up');
    
    $(elemfather).removeClass('closed');
    
    $(elemfather).addClass('open');
    
    }
    
    });
    
    $("#collapser-menu-tablet").click(function(event){
    
        var clase= $(this).attr('class');
        if (clase.indexOf('collapsed')==-1) {	
            $('.overlay-page').fadeOut();
        }
        else {
    
            $('.overlay-page').fadeIn();
        }
    });
    $(".overlay-page").focus(function(event){
        var clase= $('#collapser-menu-tablet').attr('class');
        if (clase.indexOf('collapsed')==-1) {	
            $('.overlay-page').fadeOut();
            $('.navbar-responsive-collapse.tablet').removeClass('in');
            $('.navbar-responsive-collapse.tablet').addClass('collapse');
            $('#collapser-menu-tablet').addClass('collapsed');	
        }
        else {	
        }
    });
    
    
    
    });