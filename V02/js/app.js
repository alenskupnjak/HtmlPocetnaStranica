// promjeni boju na NAV baru
$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 400);
  $('.nav-link').toggleClass('scrolled', $(this).scrollTop() > 400);
});
