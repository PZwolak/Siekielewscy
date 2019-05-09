$(document).ready(function(){ 
$('div.menuElement:nth-child(1)').click(function(){
    document.location.href="index.html";
});
$('div.menuElement:nth-child(2)').click(function(){
    document.location.href="onas.html";
});
$('div.menuElement:nth-child(3)').click(function(){
    document.location.href="oferta.html";
});
$('div.menuElement:nth-child(4)').click(function(){
    document.location.href="galeria.html";
});
$('div.menuElement:nth-child(5)').click(function(){
    document.location.href="kontakt.html";
});


wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
})
wow.init();


$('.logotypes').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed:1000,
    pauseOnHover:false,
    autoplaySpeed: 3000,
  });


  $('.slick-start').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    pauseOnHover:false,
    autoplaySpeed: 6000,
  });



  $('.gal-item, .box img').on('click', function(){
    
  });

$('.gal-item, .box img').on('click', function(){
    
var x = $(this).find('img').attr('src');
$('.modal-content .box img').attr('src',x);
$('.bg-modal.active').animate({
    height: 'toggle',
    width: 'toggle',
  });
  $('.bg-modal').addClass('active');
console.log('elo');
});
$( window ).resize(function() {
  if ($(window).width() > 990) {
    $('.carousel-item:nth-child(1) img').attr('src','../img/zdj_banner/banner1.jpg');
    $('.carousel-item:nth-child(2) img').attr('src','../img/zdj_banner/banner3.jpg');
    $('.carousel-item:nth-child(3) img').attr('src','../img/zdj_banner/banner2.jpg');
    $('.carousel-item:nth-child(4) img').attr('src','../img/zdj_banner/banner4.jpg');
  }
  if ($(window).width() < 990) {
    $('.carousel-item:nth-child(1) img').attr('src','../img/zdj_banner/banner1-900.jpg');
    $('.carousel-item:nth-child(2) img').attr('src','../img/zdj_banner/banner3-900.jpg');
    $('.carousel-item:nth-child(3) img').attr('src','../img/zdj_banner/banner2-900.jpg');
    $('.carousel-item:nth-child(4) img').attr('src','../img/zdj_banner/banner4-900.jpg');
  }
  if ($(window).width() < 700) {
    $('.carousel-item:nth-child(1) img').attr('src','../img/zdj_banner/banner1-700.jpg');
    $('.carousel-item:nth-child(2) img').attr('src','../img/zdj_banner/banner3-700.jpg');
    $('.carousel-item:nth-child(3) img').attr('src','../img/zdj_banner/banner2-700.jpg');
    $('.carousel-item:nth-child(4) img').attr('src','../img/zdj_banner/banner4-700.jpg');
  }
  if ($(window).width() < 500) {
    $('.carousel-item:nth-child(1) img').attr('src','../img/zdj_banner/banner1-500.jpg');
    $('.carousel-item:nth-child(2) img').attr('src','../img/zdj_banner/banner3-500.jpg');
    $('.carousel-item:nth-child(3) img').attr('src','../img/zdj_banner/banner2-500.jpg');
    $('.carousel-item:nth-child(4) img').attr('src','../img/zdj_banner/banner4-500.jpg');
  }
  if ($(window).width() < 400) {
    $('.carousel-item:nth-child(1) img').attr('src','../img/zdj_banner/banner1-400.jpg');
    $('.carousel-item:nth-child(2) img').attr('src','../img/zdj_banner/banner3-400.jpg');
    $('.carousel-item:nth-child(3) img').attr('src','../img/zdj_banner/banner2-400.jpg');
    $('.carousel-item:nth-child(4) img').attr('src','../img/zdj_banner/banner4-400.jpg');
  }
});
$(window).resize();




});