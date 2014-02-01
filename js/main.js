// Lines Icon

$(document).ready(function(){

	$(".menu-icon").click(function(){
  		$(this).toggleClass("close");
  		$("#off-canvas").slideToggle('fast');
	});

	$(".p-wrap").hover(function(){
  		$(this).find(".arrow").toggleClass('show');
	});

});