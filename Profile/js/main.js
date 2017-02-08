$(document).ready(function(){
  $(".mynavbtn").click(function(){
      $(".bar1").toggleClass("mytogclass1");
      $(".bar2").toggleClass("mytogclass2");
      $(".bar3").toggleClass("mytogclass3");
  });
    $(".overlay1").click(function(){
        $(".modal-container1").slideDown();
    });
    $(".modal-container1").click(function(){
        $(".modal-container1").hide();
    });
    $(".overlay2").click(function(){
        $(".modal-container2").fadeIn();
    });
    $(".modal-container2").click(function(){
        $(".modal-container2").hide();
    });
    $(".overlay3").click(function(){
        $(".modal-container3").slideDown();
    });
    $(".modal-container3").click(function(){
        $(".modal-container3").hide();
    });
    $(".my-text-2").hide();
    $(".my-text-3").hide();
    $(".my-btn1").click(function(){
        $(".my-text-1").fadeIn();
        $(".my-text-2").hide();
        $(".my-text-3").hide();
    });
    $(".my-btn2").click(function(){
        $(".my-text-1").hide();
        $(".my-text-2").fadeIn();
        $(".my-text-3").hide();
    });
    $(".my-btn3").click(function(){
        $(".my-text-1").hide();
        $(".my-text-2").hide();
        $(".my-text-3").fadeIn();
    });
    $(function() {
      $('a[href*="#"]:not([href="#myCarousel"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 700);
            return false;
          }
        }
      });
    });
    $(function(){
      $(window).scroll(function(){
        var scrollval= $(window).scrollTop();
        if(scrollval>=900){
          $(".middle-header").fadeIn(900);
          $(".myscroll1").slideDown(1000);
        }else{
          $(".middle-header").fadeOut(900);
            $(".myscroll1").slideUp(1000);
        }
      });
});
$(".modal-scroll-container").hide();
$(function(){
  var idiot=false;
  $(window).scroll(function(){
    var scrollmod= $(window).scrollTop();
    if(scrollmod>600){
      if(!idiot){
            $(".modal-scroll-container").fadeIn();
            idiot=true;
      };
    };
  });
});

$(".my-x-icon").click(function(){
  $(".modal-scroll-container").fadeOut(500);
  $(".scroll-contact").toggleClass("giveitup");
});


});
