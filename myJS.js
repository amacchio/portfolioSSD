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

//PROJECT DETAIL
$(function(){

	$(".detail").hide();

});

$(function(){//start DOC Ready event
	
	$(".thmb").click(function(){//start Click event
		$(".detail").slideDown("slow").toggleClass("active").slideToggle("slow");
		$("#thmbContainer").animate({"top": "200px"},"slow");
		return false;
	
	});//end Click event
});

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

//static nav

    function staticNav() {
        var sidenavHeight = $("#navColumn").height(); //Get height of sidenav
        var winHeight = $(window).height(); //Get height of viewport
        var browserIE6 = (navigator.userAgent.indexOf("MSIE 6")>=0) ? true : false; //Check for IE6

        if (browserIE6) { //if IE6...
            $("#navColumn").css({'position' : 'absolute'});  //reset the sidenav to be absolute
        } else { //if not IE6...
            $("#navColumn").css({'position' : 'fixed'}); //reset the sidenav to be fixed
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
