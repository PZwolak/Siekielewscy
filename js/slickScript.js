$(document).ready(function () {
    $('.contactInformation a').addClass('active');
    $('.contactInformation').addClass('active');
    $('.contactIcon').addClass('active');

$('.menuElement').mouseenter(function () {
var x = this;
 $(this).addClass('active');
 $('h5', this).addClass('slideOutRight');
 setTimeout(function(){$('h5', x).css("display","none");}, 100);
 setTimeout(function(){$('h4', x).css("display","block");}, 100);
 setTimeout(function(){$('h4', x).addClass('slideInLeft');}, 100);
 setTimeout(function(){$('h4', x).removeClass('slideInLeft');}, 0);
 setTimeout(function(){$('h5', x).removeClass('slideOutRight');}, 0);
});
$('.menuElement').mouseleave(function () {
    var y = this;
    $(this).removeClass('active');
    $('h4', this).addClass('slideOutLeft');
    setTimeout(function(){$('h4', y).css("display","none");}, 100);
    setTimeout(function(){$('h5', y).css("display","block");}, 100);
    setTimeout(function(){$('h5', y).addClass('slideInRight');}, 100);
    setTimeout(function(){$('h4', y).removeClass('slideOutLeft');}, 400);
    setTimeout(function(){$('h5', y).removeClass('slideInRight');}, 400);
});


setTimeout(function(){$('.menuElement:nth-child(1)').addClass('activeTop slideInUp');},1000);
setTimeout(function(){$('.menuElement:nth-child(2)').addClass('activeTop slideInUp');},1300);
setTimeout(function(){$('.menuElement:nth-child(3)').addClass('activeTop slideInUp');},1600);
setTimeout(function(){$('.menuElement:nth-child(4)').addClass('activeTop slideInUp');},1900);
setTimeout(function(){$('.menuElement:nth-child(5)').addClass('activeTop slideInUp');},2200);



});