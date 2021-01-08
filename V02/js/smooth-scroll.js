  // Init Scrollspy
  $('body').scrollspy({ target: '#main-nav' });

  // Add smooth scrolling
  $('#main-nav a').on('click', function (e) {
    console.log(this.hash);
    
    // Check for a hash value
    if (this.hash !== '') {
      // Prevent default behavior
      e.preventDefault();

      // Store hash
      const hash = this.hash;

      // Animate smooth scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function () {
        // Add hash to URL after scroll
        window.location.hash = hash;
      });
    }
  });