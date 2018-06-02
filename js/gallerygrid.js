/*XXXXXXXXXXXXXGalleryXXXXXXXXXXXXXXXXXXXXXX*/
      let cont=" ";
      for (var i = 1; i <= 26; i++) {
        cont += '<a data-fancybox="gallery" href="img/gallery/im/'+i+'.JPG" data-caption="Artist wants to convey..">'+'<img src="img/gallery/im/'+i+'.JPG"></a>' ;
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
