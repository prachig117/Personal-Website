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
  $('.main-name').css('padding-top',''+($(window).height())/2 - 123+'px');
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
  if ($(window).width() < 960) {
    $('.right-scroll').removeAttr('id');
    $('.right-scroll').removeClass('fullpage-wrapper');

  } else {
    $('.right-scroll').attr('id','fullpage');
  }

});
$(window).resize(function(){
  $('.main-name').css('padding-top',''+($(window).height())/2 - 123+'px');
});
