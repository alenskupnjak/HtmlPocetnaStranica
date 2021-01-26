// promjeni boju na NAV baru
$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 400);
  $('.nav-link').toggleClass('scrolled', $(this).scrollTop() > 400);
});

const nav = document.getElementById('main-nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
  console.log(nav.offsetHeight, window.scrollY);
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}
