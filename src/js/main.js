var iPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream;
var iPad = /iPad/.test(navigator.userAgent) && !window.MSStream;
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(iPhone){
    $('body').addClass('iphone');
}
if(iPad){
    $('body').addClass('ipad');
}
var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf('safari') != -1) {
  if (ua.indexOf('chrome') > -1) {
    // alert("1") // Chrome
  } else {
    // alert("2") // Safari
    $('body').addClass('safari');
  }
}



if(window.navigator.userAgent.indexOf("Edge") > -1) {
  $('body').addClass('edge');
}

var UAString = navigator.userAgent;
if (UAString.indexOf("Trident") !== -1 && UAString.indexOf("rv:11") !== -1)
{
  $('body').addClass('ie');
}
if (UAString.indexOf("Trident") !== -1 && UAString.indexOf("rv:10") !== -1)
{
  $('body').addClass('ie');
}


$(document).ready(function () {
  $('.quest__btn').click(function (e) {

    if($(this).closest('.quest__item.active').length > 0){
      $(this).closest('.quest__item').removeClass('active');
    } else{
      $('.quest__item').removeClass('active');
      $(this).closest('.quest__item').addClass('active');
    }
  });

  var bLazy = new Blazy({
    src: 'data-blazy' // Default is data-src
  });


  $('.header__mobile-menu').click(function () {
    $('.header__menu').toggleClass('open');
    $(this).toggleClass('active');
  });




  $(document).scroll(function () {
    var top = $(document).scrollTop();

    if (top < 80) {
      $(".to-top").removeClass('show');
    } else {
      $(".to-top").addClass('show');
    }
  });

  $(document).on('click', '.to-top', function (e) {
    jQuery('html,body').animate({scrollTop: 0},800);
  });

  $('#menu-btn').click(function () {
    $(this).closest('.header').toggleClass('menu-open');
    $('body').toggleClass('oh');
  });

  $(document).on('click', function (e) {
    if($(e.target).closest('.header__inner').length === 0 && $('.header__inner').length > 0 && $(e.target).closest('.header__mobile-menu').length === 0) {
      $('.header').removeClass('menu-open');
      $('body').removeClass('oh');
    }
  });

  $('.seo-more').click(function (e) {
    e.preventDefault();
    $('.seo-block--more').toggleClass('open');
    $('.seo-more').toggleClass('open');
  });

  $('.casino-faq__item').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('open');
  });

  if($(window).width() < 600){
    $("#home-slider").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      margin:15,
      responsive:{
        0 : {
          items: 1
        },
        450 : {
          items: 2
        },
      }
    });
  }
  if($(window).width() < 992){
    $("#site-table-slider").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      margin: 15,
      responsive:{
        0 : {
          items: 1
        },
        450 : {
          items: 2
        },
      }
    });
  }

});


//script fro webp img and background
var hasWebP = (function () {
  // some small (2x1 px) test images for each feature
  var images = {
    basic: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==",
    lossless: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA="
  };

  return function (feature) {
    var deferred = $.Deferred();

    $("<img>").on("load", function () {
      // the images should have these dimensions
      if (this.width === 2 && this.height === 1) {
        deferred.resolve();
      } else {
        deferred.reject();
      }
    }).on("error", function () {
      deferred.reject();
    }).attr("src", images[feature || "basic"]);

    return deferred.promise();
  }
})();

