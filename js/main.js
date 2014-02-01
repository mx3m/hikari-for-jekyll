$(document).ready(function(){

	// Off-canvas container toggle button
	$(".menu-icon").click(function(){
  		$(this).toggleClass("close");
  		$("#off-canvas").slideToggle('fast');
	});

	// Display arrow on hover (index)
	$(".p-wrap").hover(function(){
  		$(this).find(".arrow").toggleClass('show');
	});

	// Open Twitter/share in a Pop-Up
	  $('.popup').click(function(event) {
	    var width  = 575,
	        height = 400,
	        left   = ($(window).width()  - width)  / 2,
	        top    = ($(window).height() - height) / 2,
	        url    = this.href,
	        opts   = 'status=1' +
	                 ',width='  + width  +
	                 ',height=' + height +
	                 ',top='    + top    +
	                 ',left='   + left;
	    
	    window.open(url, 'twitter', opts);
	 
	    return false;
	  });

});