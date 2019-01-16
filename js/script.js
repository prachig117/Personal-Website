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
  $('#menu-open-button').click(function() {
    $('.menu').fadeIn();
    $('.menu-icon').fadeOut();
    $('.container').css('overflow','hidden');
  });
  $('#menu-close-button').click(function() {
    $('.menu').fadeOut();
    $('.menu-icon').fadeIn();
    $('.container').css('overflow','scroll');
  });

});
$(window).resize(function(){
  $('#name').css('padding-top',''+($(window).height())/2 - 83+'px');
});
