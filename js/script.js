
/******* MENU *******/

var ht=$(window).height();
$('.wrapper').css('height',ht);

function cover(){
$('html').css('overflow', 'hidden');
$('.cover-c').css('width', '100%');
};

function dis(){
$('.cover-c').css('width', '0%');
};

$(".first").hover(function() {
  $(".cover-c .sections").css('background-image', 'url(img/menu/bg1.jpg)')
});

$(".second").hover(function() {
  $(".cover-c .sections").css('background-image', 'url(img/menu/bg2.jpg)')
});

$(".third").hover(function() {
  $(".cover-c .sections").css('background-image', 'url(img/menu/bg3.jpg)')
});

$(".fourth").hover(function() {
  $(".cover-c .sections").css('background-image', 'url(img/menu/bg4.jpg)')
});

$(".fifth").hover(function() {
  $(".cover-c .sections").css('background-image', 'url(img/menu/bg5.jpg)')
});

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

/*XXXXXXXXXXXXXXX-CONTACT-XXXXXXXXXXXXXXX*/
function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(28.5677, 77.2433);
  var mapOptions = {center: myCenter, zoom: 15};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE
  });
  marker.setMap(map);
};
