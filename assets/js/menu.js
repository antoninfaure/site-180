$(document).ready(function() {

  logo = $("#logo");
  menu = $("#menu");
  nav = $("#nav-bar");
  banner = $(".banner-1:first")

  // Dynamicly resize padding between menu and first banner
  banner.css('padding-top', menu.height())
  $( window ).resize(function() {
    banner.css('padding-top', menu.height())
  });


  // When scrolling
  $(document).scroll(function () {
    var y = $(document).scrollTop()
    // If scrolled enough
    if (y >= 110) {
      // Set logo to 'mobile'
      logo.addClass('mobile');
      logo.removeClass('fixed');
      // If not hovering then collapse menu
      if ($('#nav-bar:hover').length <= 0) {
        menu.removeClass('expand');
        menu.addClass('collapse');
      }
    } else {
      // Set logo to 'fixed' on top
      logo.addClass('fixed');
      logo.removeClass('mobile')
      // Expand menu
      menu.removeClass('collapse');
      menu.addClass('expand');
    }
  });

  // When hovering on logo
  logo.hover(function() {
    // If mobile then expand
    if (logo.hasClass('mobile')) {
      menu.addClass('expand');
      menu.removeClass('collapse');
    }
  })

  // When leaving hover on nav-bar
  nav.on('mouseleave', function() {
    // If logo is mobile then collapse menu
    if (logo.hasClass('mobile')) {
      menu.removeClass('expand');
      menu.addClass('collapse');
    }
  })
})
