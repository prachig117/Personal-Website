$(document).ready(function(){
  $('.portfolio-corby').css('display','none');
  $('.portfolio-cardswap').css('display','none');

  $('.corby-logo').click(function(){
    $('.portfolio-corby').show(200);
    $('.portfolio-cardswap').css('display','none');
    $('.corby-logo').css('border','2px dashed #fe2f4d');
    $('.cardswap-logo').css('border','2px solid #1a1c33');
  });
  $('.cardswap-logo').click(function(){
    $('.portfolio-cardswap').show(200);
    $('.portfolio-corby').css('display','none');
    $('.cardswap-logo').css('border','2px dashed #fe2f4d');
    $('.corby-logo').css('border','2px solid #1a1c33');
  });
});
