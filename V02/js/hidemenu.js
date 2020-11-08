// ========================================================================= //
//  //NAVBAR SHOW - HIDE
// ========================================================================= //

$(document).ready(function () {
  window.onscroll = function () {
    currentScroll = window.pageYOffset;
    console.log('currentScroll=', currentScroll);

    if (currentScroll < 800) {
      document.getElementById('main-nav').style.top = '0';
    } else {
      document.getElementById('main-nav').style.top = '-300px';
    }
  };
});


