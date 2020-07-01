//loading screen
/* $(document).ready(function () {
  $("#loading").fadeOut(2000, function () {
    $("body").css("overflow", "auto");
  });
}); */

//hide top-btn in the top page
var aboutoffset = $("#portifolio").offset().top;
var navHeight = $("nav").outerHeight(true);
$(window).scroll(function () {
 
  if ($(window).scrollTop() > aboutoffset) {
    $(".top-btn").fadeIn(1000);
  } else {
    $(".top-btn").fadeOut(1000);
  }
});
//goto top with smooth
$(".top-btn").click(function () {
  $("html , body").animate({ scrollTop: 0 }, 2000);
});
