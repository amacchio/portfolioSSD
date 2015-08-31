/*
jQuery(document).ready(function() {
$.fancybox('<div style="width:300px"><strong>Site is currently under construction.</strong><p>&nbsp;</p><p><style="line-height:2;"><br /><a id="bs" href="http://www.behance.net/amacchio">Behance</a><a id="bs" href="http://www.dribbble.com/amacchio">Dribbble</a></p><p><a id="bs" href="https://www.twitter.com/AnthonyMacchio">@AnthonyMacchio</a><a id="bs" href="https://www.twitter.com/HotKeyoftheDay">@HotKeyoftheDay</a></p></div>', {padding: 0});
});*/


$(document).ready(function() {

//PROJECT SELECTOR
$(function(){
var $container = $('#thmbContainer');
$container.isotope({
itemSelector : '.thmb'
});
var $optionSets = $('#options .option-set'),
$optionLinks = $optionSets.find('a');
$optionLinks.click(function(){
var $this = $(this);
// don't proceed if already selected
if ( $this.hasClass('selected') ) {
return false;
}
var $optionSet = $this.parents('.option-set');
$optionSet.find('.selected').removeClass('selected');
$this.addClass('selected');
// make option object dynamically, i.e. { filter: '.my-filter-class' }
var options = {},
key = $optionSet.attr('data-option-key'),
value = $this.attr('data-option-value');
// parse 'false' as false boolean
value = value === 'false' ? false : value;
options[ key ] = value;
if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
// changes in layout modes need extra logic
changeLayoutMode( $this, options )
} else {
// otherwise, apply new options
$container.isotope( options );
}
return false;
});
});

//CONTACT CLICK
//$('.contactRight').click(function() {
//  $('#contact').animate({
//    height: 'toggle'
//  }, 500, function() {
//    // Animation complete.
//  });
//  $('#options').animate({
//    height: 'toggle'
//  }, 500, function() {
//    // Animation complete.
//  });
//});
//
//$('.portLeft').click(function() {
//  $('#contact').animate({
//    height: 'toggle'
//  }, 500, function() {
//    // Animation complete.
//  });
//  $('#options').animate({
//    height: 'toggle'
//  }, 500, function() {
//    // Animation complete.
//  });
//});
//
//$('ul#navigation li a').click(function(e) {
//        e.preventDefault(); // prevent the default action
//        e.stopPropagation(); // stop the click from bubbling
//        $(this).closest('ul').find('.selected').removeClass('selected');
//        $(this).parent().addClass('selected');
//});
//
//function setbg(color)
//{
//document.getElementByClass("field").style.background=color
//}


//DESCRIPTION HOVER
$(function(){
 //move the image in pixel
    var move = -15;
     
    //zoom percentage, 1.2 =120%
    var zoom = 1.2;
 
    //On mouse over those thumbnail
    $('.thmb').hover(function() {
         
        //Set the width and height according to the zoom percentage
        width = $('.thmb').width() * zoom;
        height = $('.thmb').height() * zoom;
         
        //Display the caption
        $(this).find('div.description').stop(false,true).fadeIn(100);
    },
    function() {
         
 
        //Hide the caption
        $(this).find('div.description').stop(false,true).fadeOut(100);
    });
 
});

//Modal Gallery
$(document).ready(function() {

	/* Using custom settings */
	
//	$("a.thmb").fancybox({
//		'hideOnContentClick': true
//	});

	/* Apply fancybox to multiple items */
	
	$("a[class^='grouped_Elements']").fancybox({
		'cyclic'			 :	'true',
		'centerOnScroll'	 :	'true',
		'transitionIn'		 :	'fade',
		'transitionOut'		 :	'fade',
		'speedIn'			 :	'fast', 
		'speedOut'			 :	'fast', 
		'overlayShow'		 :	'true',
		'overlayOpacity'	 :	'.5',
		'overlayColor'		 :	'#E7E5D3',
		'hideOnOverlayClick' :  'true',
		'padding'			 :  '0',
	});
	
	//iframes
	$("#iframeDex").fancybox({
        'type'               : 'iframe',
		'width'    			 :  720,
		'height'    		 :   480,
		'cyclic'			 :	'true',
		'centerOnScroll'	 :	'true',
		'transitionIn'		 :	'fade',
		'transitionOut'		 :	'fade',
		'speedIn'			 :	'fast', 
		'speedOut'			 :	'fast', 
		'overlayShow'		 :	'true',
		'overlayOpacity'	 :	'.5',
		'overlayColor'		 :	'#E7E5D3',
		'hideOnOverlayClick' :  'true',
		'padding'			 :  '0',
	});
	
	$("#iframeThread").fancybox({
	    'type'               : 'iframe',
		'width'    			 :   720,
		'height'    		 :   480,
		'cyclic'			 :	'true',
		'centerOnScroll'	 :	'true',
		'transitionIn'		 :	'fade',
		'transitionOut'		 :	'fade',
		'speedIn'			 :	'fast', 
		'speedOut'			 :	'fast', 
		'overlayShow'		 :	'true',
		'overlayOpacity'	 :	'.5',
		'overlayColor'		 :	'#E7E5D3',
		'hideOnOverlayClick' :  'true',
		'padding'			 :  '0',
	});
	
	$("#iframeETS").fancybox({
	    'type'               : 'iframe',
		'width'    			 :   720,
		'height'    		 :   480,
		'cyclic'			 :	'true',
		'centerOnScroll'	 :	'true',
		'transitionIn'		 :	'fade',
		'transitionOut'		 :	'fade',
		'speedIn'			 :	'fast', 
		'speedOut'			 :	'fast', 
		'overlayShow'		 :	'true',
		'overlayOpacity'	 :	'.5',
		'overlayColor'		 :	'#E7E5D3',
		'hideOnOverlayClick' :  'true',
		'padding'			 :  '0',
	});
	
});

//static nav

    function staticNav() {
        var sidenavHeight = $("#navColumn").height(); //Get height of sidenav
        var winHeight = $(window).height();
        var winWidth = $(window).width();
		var mobileWidth = 480; //Get height of viewport
        var browserIE6 = (navigator.userAgent.indexOf("MSIE 6")>=0) ? true : false; //Check for IE6

        if (browserIE6) { //if IE6...
            $("#navColumn").css({'position' : 'absolute'});  //reset the sidenav to be absolute
        } else { //if not IE6...
            $("#navColumn").css({'position' : 'fixed'}); //reset the sidenav to be fixed
        }

		if (winWidth > mobileWidth){
			$("#navColumn").css({'position' : 'fixed'});
		} else {
			$("#navColumn").css({'position' : 'static'});
		}
		
        if (sidenavHeight > winHeight) { //If sidenav is taller than viewport...
            $("#navColumn").css({'position' : 'static'}); //switch the fixed positioning to static. Say good bye to sticky nav!
        }
    }

    staticNav(); //Execute function on load

    $(window).resize(function () { //Each time the viewport is adjusted/resized, execute the function
        staticNav();
    });

});
