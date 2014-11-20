$(document).on('ready',function(){
	$('#boton-menu').on('click',function(){
		$('#menu-ul').slideToggle('fast');
		$('#menu').css('border-bottom','none');
		$('#menu').css('box-shadow','none');

	});
		
});

$(document).ready(function () {       
	if ($('html').hasClass('desktop')) {
  		new WOW().init();
	}
	var _gaq = _gaq || [];
	 _gaq.push(['_setAccount', 'UA-7078796-5']);
	 _gaq.push(['_trackPageview']);
	 (function() {
	   var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	   ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	 })();   
});



	

