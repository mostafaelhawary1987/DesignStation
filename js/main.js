$(window).on('load', function () {
  $('.pre-loader').fadeOut("500", function () {
      $(this).remove();
      $("body").removeClass("overflow");
  });
});

$(document).ready(function () {
  new WOW().init();


  ///////// **header** ///////// 
  if ($(window).width() >= 992) {
      if ($(this).scrollTop() >= 40) {
          $("body").addClass("header-scroll");
      } else {
          $("body").removeClass("header-scroll");
      }
      $(window).scroll(function () {
          if ($(this).scrollTop() >= 40) {
              $("body").addClass("header-scroll");
          } else {
              $("body").removeClass("header-scroll");
          }
      });
  }
  $("#openNav").click( function() {

    $('.sidenav').addClass('open');
    $('.overlay').fadeIn();
    $('body').addClass('ovh');
});

$(".closebtn,.overlay").click( function() {
    $('.sidenav').removeClass('open');
    $('.overlay').fadeOut();
    $('body').removeClass('ovh');
});


});
$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:0},"1000");return false})});
$('.search-bar').on('click', function(event) {
    event.preventDefault();
    $('#search').addClass('open');
    $('#search > form > input[type="search"]').focus();
});

$('#search, #search button.close').on('click keyup', function(event) {
    if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
        $(this).removeClass('open');
    }
});
$('.brand_slider').owlCarousel({
    items:7,
    autoplay:false,
    rtl:true,
    loop: false,
    margin:18,
    nav:true,
    navText: ["<i class='fas fa-chevron-right'></i>","<i class='fas fa-chevron-left'></i>"],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        991:{
            items:3
        },
        1199:{
            items:5
        },
        1200:{
            items:6
        }
    }
}); 


