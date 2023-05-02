"use strict";

// Get the current width of the scrollbar
const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

// Hide the scrollbar and navbar by setting the overflow property to hidden and adjusting the right margin to compensate for the scrollbar width
const navbar = document.getElementById("navbar");
document.body.style.overflow = "hidden";
document.body.style.marginRight = `${scrollbarWidth}px`;
navbar.style.opacity = 0;

// Set a timeout to restore the scrollbar and navbar
setTimeout(() => {
  document.body.style.overflow = "";
  document.body.style.marginRight = "";
  navbar.style.opacity = 0.8;
}, 8000);

// Video Pay on Play

const qVideo = document.querySelector("beer_video");

window.onscroll = (event) => {
  stopPlaying(qVideo);
  qVideo[calcVideoNumber(event.scrollY)].play();
};

// Navbar Styling

let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";
    }
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("top");
    scrolled = false;
  }
};

jQuery(document).ready(function () {
  // Scrolling for anchor links in within the same page
  jQuery('a[href*="#"]:not([href="#"])').click(function () {
    _hash = this.hash;
    _scroll_it(_hash);
  });

  // scrolling for anchor links coming from a different page
  var _hash = window.location.hash;
  if (_hash.length > 0) {
    window.scrollTo(0, 0);

    setTimeout(function () {
      _scroll_it(_hash);
    }, 400);
  }

  function _scroll_it(_hash) {
    jQuery("html,body").animate(
      {
        scrollTop: jQuery(_hash).offset().top - 100,
      },
      400
    );
  }
});
