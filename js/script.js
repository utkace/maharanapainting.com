
/******* MENU *******/
$(".first").hover(function() {
  $(".cover-c").css('background-image', 'url(img/menu/bg1.jpg)')
});

$(".second").hover(function() {
  $(".cover-c").css('background-image', 'url(img/menu/bg2.jpg)')
});

$(".third").hover(function() {
  $(".cover-c").css('background-image', 'url(img/menu/bg3.jpg)')
});

$(".fourth").hover(function() {
  $(".cover-c").css('background-image', 'url(img/menu/bg4.jpg)')
});

$(".fifth").hover(function() {
  $(".cover-c").css('background-image', 'url(img/menu/bg5.jpg)')
});

/******* INDEX *******/
var ht=$(window).height();
$('.wrapper').css('height',ht);

function cover(){
$('.cover-c').css('width', '100%');
};

function dis(){
$('.cover-c').css('width', '0%');
};
