$(document).ready(function(){
  $('.portfolio-corby').css('display','none');
  $('.portfolio-cardswap').css('display','none');

  $('.corby-logo').click(function(){
    $('.portfolio-corby').show(200);
    $('.portfolio-cardswap').css('display','none');
  });
  $('.cardswap-logo').click(function(){
    $('.portfolio-cardswap').show(200);
    $('.portfolio-corby').css('display','none');
  });
});
