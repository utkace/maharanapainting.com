
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


/*XXXXXXXXXXXXXXX-Media-XXXXXXXXXXXXXXX*/
$(document).ready(function () {
        var carousel = $("#carousel").waterwheelCarousel({
          flankingItems: 3,
          movingToCenter: function ($item) {
            $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
          },
          movedToCenter: function ($item) {
            $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
          },
          movingFromCenter: function ($item) {
            $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
          },
          movedFromCenter: function ($item) {
            $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
          },
          clickedCenter: function ($item) {
            $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
          }
        });

        $('#prev').bind('click', function () {
          console.log('hllo');
          carousel.prev();
          return false
        });

        $('#next').bind('click', function () {
          carousel.next();
          return false;
        });

        $('#reload').bind('click', function () {
          newOptions = eval("(" + $('#newoptions').val() + ")");
          carousel.reload(newOptions);
          return false;
        });

      });



/*XXXXXXXXXXXXXGalleryXXXXXXXXXXXXXXXXXXXXXX*/
      var cont="";
      for (var i = 1; i <= 26; i++) {
        cont += '<a data-fancybox="gallery" href="img/gallery/im/'+i+'.JPG" data-caption="Artist wants to convey..">'+'<img src="img/gallery/im/'+i+'.JPG"></a>' ;
        console.log(cont);
      }
      document.querySelector('.wrap').innerHTML = cont;
    
            /*if we click on button 2017 */

            $('.ima2').click(function (){
              console.log("hello");
              cont="";
              for (var i = 1; i <= 10; i++) {
        cont += '<a data-fancybox="gallery" href="img/gallery/2017/'+i+'.JPG" data-caption="Artist wants to convey..">'+'<img src="img/gallery/2017/'+i+'.JPG"></a>' ;
        console.log(cont);
      }
      document.querySelector('.wrap').innerHTML = cont;
    
            });

            $('.ima3').click(function (){
              console.log("hello");
              cont="";
              for (var i = 11; i <= 26; i++) {
        cont += '<a data-fancybox="gallery" href="img/gallery/2018/'+i+'.JPG" data-caption="Artist wants to convey..">'+'<img src="img/gallery/2018/'+i+'.JPG"></a>' ;
        console.log(cont);
      }
      document.querySelector('.wrap').innerHTML = cont;
    
            });

            $('.ima1').click(function(){
              location.reload();  
            });
