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

  $('#corby').click(function(){
     if ($('#corby-info').css('display') == 'none') {
         $('#corby-info').fadeIn();
         $('#cardswap-info').fadeOut();
         $('#repindia-info').fadeOut();
         $('#academic-info').fadeOut();
     } else {
         $('#corby-info').fadeOut();
     }
  });

  $('#cardswap').click(function(){
     if ($('#cardswap-info').css('display') == 'none') {
         $('#cardswap-info').fadeIn();
         $('#corby-info').fadeOut();
         $('#repindia-info').fadeOut();
         $('#academic-info').fadeOut();
     } else {
         $('#cardswap-info').fadeOut();
     }
  });

  $('#repindia').click(function(){
     if ($('#repindia-info').css('display') == 'none') {
         $('#repindia-info').fadeIn();
         $('#corby-info').fadeOut();
         $('#cardswap-info').fadeOut();
         $('#academic-info').fadeOut();
     } else {
         $('#repindia-info').fadeOut();
     }
  });

  $('#academic').click(function(){
     if ($('#academic-info').css('display') == 'none') {
         $('#academic-info').fadeIn();
         $('#corby-info').fadeOut();
         $('#cardswap-info').fadeOut();
         $('#repindia-info').fadeOut();
     } else {
         $('#academic-info').fadeOut();
     }
  });

});
$(window).resize(function(){
  $('.main-name').css('padding-top',''+($(window).height())/2 - 123+'px');
});
