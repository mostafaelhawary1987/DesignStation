
$(window).on("load", function () {
  $('body,html').scrollTop(0)
  $(".pre-loader").fadeOut(500, function () {
      $(this).remove();
      $('html, body').css("overflow-y", "visible");


  });
});

  new WOW().init();
  
  
$(function() {


  // fixed nav
  if ($(window).width() < 992) {

    $(".upper-bar").remove();
    $(window).scroll(function () {
      if ($(window).scrollTop() > 1 ) {
        $(".nav-bar").addClass("fixed-nav");
        $(".nav-place").addClass("show");
    } else {
        $(".nav-bar").removeClass("fixed-nav");
        $(".nav-place").removeClass("show");
    }
    
    });



  } else {
    
    $(window).scroll(function () {
      if ($(window).scrollTop() > $(".upper-bar").innerHeight() ) {
        $(".nav-bar").addClass("fixed-nav");
        $(".nav-place").addClass("show");
    } else {
        $(".nav-bar").removeClass("fixed-nav");
        $(".nav-place").removeClass("show");
    }
    
    });

  }
  
    
    $('.header .owl-carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:1,
      dots:true,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      },
      navText: ["<span class='lnr lnr-chevron-right'></span>","<span class='lnr lnr-chevron-left'></span>"]
    });


    $('.sp-offers .owl-carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:10,
      dots:true,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:4,
          },
          1400:{
              items:4,
          }
      },
      navText: ["<span class='lnr lnr-chevron-right'></span>","<span class='lnr lnr-chevron-left'></span>"]
    });




    

    
    


    
    
  

  // menu - search




    $(".nav-bar .icons .search-icon").on("click", function () {
      $(".search-container").fadeIn();
      $('html, body').css("overflow-y", "hidden");
    });
    $(".search-container, .search-container .close").on("click", function () {
      $(".search-container").fadeOut();
      $('html, body').css("overflow-y", "visible");

    });
    $(".zx-search").on("click", function(e) {
      e.stopPropagation();
    });



    




    $(".nav-bar .icons .menu-icon").on("click", function () {
      $(".fixed-menu").fadeIn();
      $(".fixed-menu .menu").addClass("show");
      $(".fixed-menu .main-list").addClass("show");
      $('html, body').css("overflow-y", "hidden");
    });
    $(".fixed-menu, .fixed-menu .menu-header .close").on("click", function () {
      $(".fixed-menu").fadeOut();
      $(".fixed-menu .menu").removeClass("show");
      $(".fixed-menu .main-list").removeClass("show");
      $('html, body').css("overflow-y", "visible");
    });
    $(".fixed-menu .menu").on("click", function(e) {
      e.stopPropagation();
    });



    $(".fixed-menu .main-list .slide").on("click", function() {
      $(this).toggleClass("active");
      $(this).children("ul").slideToggle();
      });
    $(".fixed-menu .sub-list .slide-two").on("click", function(e) {
      e.stopPropagation();
    });
    $(".fixed-menu .sub-list .slide-two").on("click", function() {
      $(this).toggleClass("active");
      $(this).children("ul").slideToggle();
    });


     if ($(window).width() < 992) {
       $(".footer .list-header").on("click", function() {
         $(this).toggleClass("active");
         $(this).siblings("ul").slideToggle();
       });
     
      } else {
        
      }

    





    // $(".fixed-menu .cur-switcher").on("click", function () {
    //   $(".fixed-menu .cur-switcher .switch").slideToggle();
    // });




  
});




