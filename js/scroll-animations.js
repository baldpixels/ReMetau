$( document ).ready( function() {

  var wrapper = $("#wrapper");
  var ocean = $("#ocean");

  var arrow = $("#arrow-down");

  var precision = 10000;
  var scrollPercent = Math.round( precision * $(window).scrollTop() / ($(document).height() - $(window).height() - overshoot) ) / precision;
  var initialHeight = 60;
  var overshoot = 10;

// SETUP

// FUNCTIONS
  function seaLevelChange() {
    scrollPercent = Math.round( precision * $(window).scrollTop() / ($(document).height() - $(window).height() - overshoot) ) / precision;

    var riseHeight = initialHeight + scrollPercent * $(window).height();

    ocean.css('height', riseHeight);
  }

// EVENT LISTENERS
  $(window).scroll(function() {
    requestAnimationFrame(seaLevelChange);
  });

  seaLevelChange();
})
