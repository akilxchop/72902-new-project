/*Custom JS START*/
(function ($) {
  function sliderFun() {
    /*Card Slider*/
    $(".card-wrap").owlCarousel({
      autoplay: false,
      rewind: false,
      margin: 20,
      dots: false,
      responsiveClass: true,
      smartSpeed: 800,
      nav: true,
      items: 5,
      touchDrag: false,
      mouseDrag: false,
      responsive: {
        319: {
          items: 2,
          margin: 15
        },
        480: {
          items: 3
        },
        768: {
          items: 4
        },
        1364: {
          items: 5
        }
      }
    });

    /*Hero Slider*/
    $(".hero-slider").owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      dots: false,
      responsiveClass: true,
      smartSpeed: 800,
      nav: true,
      items: 2,
      autoWidth: true,
      arrows: false,
      touchDrag: false,
      mouseDrag: false,
      responsive: {
        319: {
          margin: 0
        },
        576: {
          margin: 20
        }
      }
    });
  }
  $(document).ready(function () {
    $('.nav-toggle').click(function () {
      $('body').toggleClass('sidebarMin');
    });

    /*For theme*/
    $('.btn-dark').click(function () {
      $('body').removeClass('light-theme');
    });
    $('.btn-light').click(function () {
      $('body').addClass('light-theme');
    });
    sliderFun();

    /*Like Heart*/
    $('.heart_logo').click(function () {
      if ($(this).hasClass('liked')) {
        $(this).removeClass('liked');
      } else {
        $(this).addClass('liked');
      }
    });

    /*Custom select Box*/
    $('select').niceSelect();
    $('.svgImg img').each(function () {
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');
      jQuery.get(imgURL, function (data) {
        var $svg = jQuery(data).find('svg');
        if (typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
        }
        if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
        }
        $img.replaceWith($svg);
      }, 'xml');
    });
  });
  $(window).on('resize', function () {
    sliderFun();
  });
})(jQuery);
/*Custom JS END*/
//# sourceMappingURL=custom.js.map
