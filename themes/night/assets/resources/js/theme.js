// ---
require('./bootstrap');

/* YOUR CODE HERE */


const mediaQuery = window.matchMedia('(max-width: 768px)') ;
const navLarge = document.getElementById("nav1");
const navSmall = document.getElementById("nav2");


UIkit.util.on('#sec2', 'inview', function () {
    
        UIkit.scroll('#section2').scrollTo('#section2');
        

        if (mediaQuery.matches) {
          document.getElementById("body").style.overflowY = "hidden";
          }
        

});


UIkit.util.on('#section2', 'scrolled', function () {

        UIkit.scrollspy('#sec1', {
	    		  
	    		  repeat:true

	    	});

	    	document.getElementById("body").style.overflowY = "visible";

	    	navLarge.style.backgroundColor = "transparent";
	      navSmall.style.backgroundColor = "transparent";

});



UIkit.util.on('#sec1', 'inview', function () {
	    
	    UIkit.scroll('#section1').scrollTo('#section1');

});

UIkit.util.on('#section1', 'scrolled', function () {

	    navLarge.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
	    navSmall.style.backgroundColor = "rgba(0, 0, 0, 0.2)";

});



UIkit.util.on('#sec3', 'inview', function () {
	    
	    UIkit.scroll('#section3').scrollTo('#section3');

	    if (mediaQuery.matches) {
          document.getElementById("body").style.overflowY = "hidden";
          }
});

UIkit.util.on('#section3', 'scrolled', function () {

	    	document.getElementById("body").style.overflowY = "visible";

});


/*toggle-nav*/


UIkit.util.on('#secfinal', 'inview', function () {
	    
	    UIkit.scroll('#sectionfinal').scrollTo('#sectionfinal');

	    console.log('#someButton was clicked');

	    navLarge.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
	    navSmall.style.backgroundColor = "rgba(0, 0, 0, 0.8)";




	    
});

UIkit.util.on('#secfinal', 'outview', function () {


});







/**/
/**/
/**/
/**/








/*services*/

UIkit.util.on('#sec-faq', 'scrolled', function () {   


          UIkit.scrollspy('#sec-service', {
	    		repeat:true
	    	});  

});


UIkit.util.on('#sec-service', 'inview', function () {

	    
	    UIkit.scroll('#section-service').scrollTo('#section-service');


});

UIkit.util.on('#sec-faq', 'inview', function () {

	    
	    UIkit.scroll('#sec-faq').scrollTo('#sec-faq');

	    document.getElementById("nav1").style.backgroundColor = "#000";
	    document.getElementById("nav2").style.backgroundColor = "#000";
	    document.getElementById("nav1").style.boxShadow = "black 0px 5px 15px";
	    document.getElementById("nav2").style.boxShadow = "black 0px 5px 15px;";

});

UIkit.util.on('#sec-faq', 'outview', function () {

	    
	    document.getElementById("nav1").style.backgroundColor = "transparent";
	    document.getElementById("nav2").style.backgroundColor = "transparent";
	    document.getElementById("nav1").style.boxShadow = "none";
	    document.getElementById("nav2").style.boxShadow = "none";
});



