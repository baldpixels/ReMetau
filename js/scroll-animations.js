$( document ).ready( function() {

  var wrapper = $("#wrapper");
  var ocean = $("#ocean");

  var scrollPercent = 0;
  var riseHeight = 0;
  var initialHeight = 30;

// SETUP

// FUNCTIONS
  function seaLevelChange() {
    let precision = 10000;
    scrollPercent = Math.round( precision * $(window).scrollTop() / ($(document).height() - $(window).height()) ) / precision;

    riseHeight = initialHeight + scrollPercent * $(window).height();

    ocean.css('height', riseHeight);
  }

// EVENT LISTENERS
  $(window).scroll(function() {
    requestAnimationFrame(seaLevelChange);
  });

  seaLevelChange();
})
