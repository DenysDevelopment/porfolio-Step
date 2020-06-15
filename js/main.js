$(".all").click(function () {
  $(".work").show(100);
});

$(".narobot").click(function () {
  $(".work").hide(100);
  $(".work-1").show(100);
});

$(".multi-page").click(function () {
  $(".work").hide(100);
  $(".work-2").show(100);
});

$(".Landing-page").click(function () {
  $(".work").hide(100);
  $(".work-3").show(100);
});
//slider
$(document).ready(function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,
    swipe: false,
  });
});
//header
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("#header-scrol").addClass("header__scroll").fade(100);
    } else {
      $("#heade-scrol").removeClass("header__scroll").fade(100);
    }
  });
});

toggleHeader();
