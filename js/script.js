
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

/*XXXXXXXXXXXXXXXX-ABOUT-XXXXXXXXXXX*/
var x=screen.width;
console.log(x);
function cover() {
	$('.cover-c').css('width', '100%');
};
function dis() {
	$('.cover-c').css('width', '0%');
};
function bot1() {
	//$('.section-1').css('width', '100%');
	$('.section-1').fadeToggle(2000); //give width 100%
};
function bot2() {
	//$('.section-2').css('width', '100%');
	$('.section-2').fadeToggle(2000);
};
function bot3() {
	//$('.section-3').css('width', '100%');
	$('.section-3').fadeToggle(2000);
};