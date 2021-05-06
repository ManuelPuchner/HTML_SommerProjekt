$(() => {
  setMobileIcon();
  $(window).resize(() => {
    setMobileIcon();
  });

  function setMobileIcon() {
    if ($(window).width() < 720) {
      $("nav a").addClass("pointer-events");
      $("nav ~ p").css({ transition: "opacity .3s ease", opacity: 1 });
      $("nav ~ p").removeClass("pointer-events");
    } else {
      if ($("header").hasClass("expand")) {
        toggleMenu();
      }
      $("nav a").removeClass("pointer-events");
      $("nav ~ p").css({ transition: "opacity .3s ease", opacity: 0 });
      $("nav ~ p").addClass("pointer-events");
    }
  }

  $("nav ~ p").click(() => {
    toggleMenu();
  });

  function toggleMenu() {
    $("nav ~p").toggleClass("fa-times");
    $("body, html").toggleClass("overflow-hidden");
    $("nav a").toggleClass("pointer-events");
    $("nav > ul").toggleClass("opacity-show");
    $("header").toggleClass("expand");
  }
});
