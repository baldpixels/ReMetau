$( document ).ready( function() {

  var wrapper = $("#wrapper");
  var ocean = $("#ocean");

  var scrollPercent = 0;
  var riseHeight = 0;
  var initialHeight = 30;
  var titleFadePercent = .05;
  var titleOn = true;

// SETUP

// FUNCTIONS
  function seaLevelChange() {
    let precision = 10000;
    scrollPercent = Math.round( precision * $(window).scrollTop() / ($(document).height() - $(window).height()) ) / precision;

    if(titleOn) {
      console.log("titleOn check");

      if(scrollPercent > titleFadePercent) {
        $('h1').fadeTo('slow', 0);
        titleOn = false;
      }
    } else {
      if(scrollPercent <= titleFadePercent) {
        $('h1').fadeTo('slow', 1);
        titleOn = true;
      }
    }

    riseHeight = initialHeight + scrollPercent * $(window).height();

    ocean.css('height', riseHeight);
  }

// EVENT LISTENERS
  $(window).scroll(function() {
    requestAnimationFrame(seaLevelChange);
  });

  seaLevelChange();
})
