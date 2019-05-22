$(document).ready(function(){
  if ($(document).width() >= 569) {
    $('.container').css('margin-top',(($(window).height() / 2  - $(".container").outerHeight()/2) + "px"));
    $('.content').css('margin-top',(($('.row1').height() / 2  - $(".content").outerHeight()/2) + "px"));
  } else{
    $('.container').css('margin-top','0px');
    $('.content').css('margin-top','0px');
  }
});
$(window).resize(function(){
  if ($(document).width() >= 569) {
    $('.container').css('margin-top',(($(window).height() / 2  - $(".container").outerHeight()/2) + "px"));
    $('.content').css('margin-top',(($('.row1').height() / 2  - $(".content").outerHeight()/2) + "px"));
  } else {
    $('.container').css('margin-top','0px');
    $('.content').css('margin-top','0px');
  }
});
