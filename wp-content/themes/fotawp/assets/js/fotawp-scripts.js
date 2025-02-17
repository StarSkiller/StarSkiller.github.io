(function ($) {
  "use strict";
  //fade animation
  $(".fotawp-fade-up").attr({
    "data-aos": "fade-up",
  });
  $(".fotawp-fade-down").attr({
    "data-aos": "fade-down",
  });
  $(".fotawp-fade-left").attr({
    "data-aos": "fade-left",
  });
  $(".fotawp-fade-right").attr({
    "data-aos": "fade-right",
  });
  $(".fotawp-fade-up-right").attr({
    "data-aos": "fade-up-right",
  });
  $(".fotawp-fade-up-left").attr({
    "data-aos": "fade-up-left",
  });
  $(".fotawp-fade-down-right").attr({
    "data-aos": "fade-down-right",
  });
  $(".fotawp-fade-down-left").attr({
    "data-aos": "fade-down-left",
  });

  //slide animation
  $(".fotawp-slide-left").attr({
    "data-aos": "slide-left",
  });
  $(".fotawp-slide-right").attr({
    "data-aos": "slide-right",
  });
  $(".fotawp-slide-up").attr({
    "data-aos": "slide-up",
  });
  $(".fotawp-slide-down").attr({
    "data-aos": "slide-down",
  });

  //zoom animation
  $(".fotawp-zoom-in").attr({
    "data-aos": "zoom-in",
  });
  $(".fotawp-zoom-in-up").attr({
    "data-aos": "zoom-in-up",
  });
  $(".fotawp-zoom-in-down").attr({
    "data-aos": "zoom-in-down",
  });
  $(".fotawp-zoom-in-left").attr({
    "data-aos": "zoom-in-left",
  });
  $(".fotawp-zoom-in-right").attr({
    "data-aos": "zoom-in-right",
  });
  $(".fotawp-zoom-out").attr({
    "data-aos": "zoom-out",
  });
  $(".fotawp-zoom-out-up").attr({
    "data-aos": "zoom-out-up",
  });
  $(".fotawp-zoom-out-down").attr({
    "data-aos": "zoom-out-down",
  });
  $(".fotawp-zoom-out-left").attr({
    "data-aos": "zoom-out-left",
  });
  $(".fotawp-zoom-out-right").attr({
    "data-aos": "zoom-out-right",
  });

  //flip animation
  $(".fotawp-flip-up").attr({
    "data-aos": "flip-up",
  });
  $(".fotawp-flip-down").attr({
    "data-aos": "flip-down",
  });
  $(".fotawp-flip-left").attr({
    "data-aos": "flip-left",
  });
  $(".fotawp-flip-right").attr({
    "data-aos": "flip-right",
  });

  //animation ease attributes
  $(".fotawp-linear").attr({
    "data-aos-easing": "linear",
  });
  $(".fotawp-ease").attr({
    "data-aos-easing": "ease",
  });
  $(".fotawp-ease-in").attr({
    "data-aos-easing": "ease-in",
  });
  $(".fotawp-ease-in-back").attr({
    "data-aos-easing": "ease-in-back",
  });
  $(".fotawp-ease-out").attr({
    "data-aos-easing": "ease-out",
  });
  $(".fotawp-ease-out-back").attr({
    "data-aos-easing": "ease-out-back",
  });
  $(".fotawp-ease-in-out-back").attr({
    "data-aos-easing": "ease-in-out-back",
  });
  $(".fotawp-ease-in-shine").attr({
    "data-aos-easing": "ease-in-shine",
  });
  $(".fotawp-ease-out-shine").attr({
    "data-aos-easing": "ease-out-shine",
  });
  $(".fotawp-ease-in-out-shine").attr({
    "data-aos-easing": "ease-in-out-shine",
  });
  $(".fotawp-ease-in-quad").attr({
    "data-aos-easing": "ease-in-quad",
  });
  $(".fotawp-ease-out-quad").attr({
    "data-aos-easing": "ease-out-quad",
  });
  $(".fotawp-ease-in-out-quad").attr({
    "data-aos-easing": "ease-in-out-quad",
  });
  $(".fotawp-ease-in-cubic").attr({
    "data-aos-easing": "ease-in-cubic",
  });
  $(".fotawp-ease-out-cubic").attr({
    "data-aos-easing": "ease-out-cubic",
  });
  $(".fotawp-ease-in-out-cubic").attr({
    "data-aos-easing": "ease-in-out-cubic",
  });
  $(".fotawp-ease-in-quart").attr({
    "data-aos-easing": "ease-in-quart",
  });
  $(".fotawp-ease-out-quart").attr({
    "data-aos-easing": "ease-out-quart",
  });
  $(".fotawp-ease-in-out-quart").attr({
    "data-aos-easing": "ease-in-out-quart",
  });

  setTimeout(function () {
    AOS.init({
      once: true,
      duration: 1200,
    });
  }, 100);

  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
      jQuery(".fotawp-scrollto-top a").fadeIn();
    } else {
      jQuery(".fotawp-scrollto-top a").fadeOut();
    }
  });
  jQuery(".fotawp-scrollto-top a").click(function () {
    jQuery("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  $(".fotawp-search-button").click(function () {
    $(".fotawp-search-content").show();
  });

  // Close modal
  $(".fotawp-search-close").click(function () {
    $(".fotawp-search-content").hide();
  });

  // Close modal when clicking outside of it
  $(window).click(function (event) {
    if ($(event.target).is(".fotawp-search-content")) {
      $(".fotawp-search-content").hide();
    }
  });

  $(".fotawp-search-modal").on("keydown", ".wp-block-search__button", function (e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 9) {
      e.preventDefault();
      $(".fotawp-search-close").focus();
    }
  });
  $(".fotawp-search-modal").on("keydown", ".fotawp-search-close", function (e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 9) {
      e.preventDefault();
      $(".fotawp-search-modal .wp-block-search__input").focus();
    }
  });
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var fotawpStickyHeader = $(".fotawp-sticky-header");
    if (fotawpStickyHeader.length && scrollTop > 0) {
      fotawpStickyHeader.addClass("sticky-header-enabled fotawp-zoom-in-up");
    } else {
      fotawpStickyHeader.removeClass("sticky-header-enabled");
    }
  });
})(jQuery);
