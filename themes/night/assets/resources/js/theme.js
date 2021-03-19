// ---
require('./bootstrap');

/* YOUR CODE HERE */








UIkit.util.on('#section2', 'inview', function () {
    
        UIkit.scroll('#section2').scrollTo('#section2');
        

});

UIkit.util.on('#section1', 'inview', function () {
	    
	    UIkit.scroll('#section1').scrollTo('#section1');
});

UIkit.util.on('#section3', 'inview', function () {
	    
	    UIkit.scroll('#section3').scrollTo('#section3');

});

UIkit.util.on('#section4', 'inview', function () {
	    
	    UIkit.scroll('#section4').scrollTo('#section4');

});

UIkit.util.on('#sectionfinal', 'inview', function () {
	    
	    UIkit.scroll('#sectionfinal').scrollTo('#sectionfinal');

	    document.getElementById("nav1").style.backgroundColor = "#110011";
	    document.getElementById("nav2").style.backgroundColor = "#110011";

	    document.getElementById("svg").style.display = "block";



	    
});

/*toggle-nav*/

UIkit.util.on('#sectionfinal', 'outview', function () {

	    
	    document.getElementById("nav1").style.backgroundColor = "transparent";
	    document.getElementById("nav2").style.backgroundColor = "transparent";

	    document.getElementById("svg").style.display = "none";
});

/*first sec*/

UIkit.util.on('#section2', 'scrolled', function () {

            UIkit.scrollspy('#section1', {
	    		repeat:true
	    	});
});


/*arrow toggle*/


var myPath = document.getElementById("word");
var length = myPath.getTotalLength();
console.log(length);