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

// if ($(window).width() < 991) {
//   $('.carousel-item img:nth-child(1)').attr('src','../img/cleaning1m.jpg');
//   $('.carousel-item img:nth-child(2)').attr('src','../img/cleaning1m.jpg');
//   $('.carousel-item img:nth-child()').attr('src','../img/cleaning1m.jpg');
// }



});