$(document).ready(function(){
  $('#fullpage').fullpage({
		//options here
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);
  $('#name').css('padding-top',''+($(window).height())/2 - 83+'px');
  $('.main-name').css('padding-top',''+($(window).height())/2 - 143+'px');


});
$(window).resize(function(){
  $('#name').css('padding-top',''+($(window).height())/2 - 83+'px');
  $('.main-name').css('padding-top',''+($(window).height())/2 - 143+'px');

});
