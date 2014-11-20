$(document).on('ready',function(){
	$('#boton-menu').on('click',function(){
		$('#menu-ul').slideToggle('fast');
		$('#menu').css('border-bottom','none');
		$('#menu').css('box-shadow','none');

	});
	if ($('html').hasClass('desktop')) {
  		new WOW().init();
	}
	wow = new WOW(
	  {
	    animateClass: 'animated',
	    offset:       100
	  }
	);
	wow.init();
	document.getElementById('moar').onclick = function() {
	  var section = document.createElement('section');
	  section.className = 'section--purple wow fadeInDown';
	  this.parentNode.insertBefore(section, this);
	};
});




	

