$( document ).ready( function() {

  var ocean = $("#ocean");
  var fadeInTime = 600;

// Scroll Animation Variables
  var precision = 10000;
  var initialHeight = 30;
  var scrollPercent = 0;
  var overshoot = 10;

// FUNCTIONS
  function calcScrollPercent() {
    return Math.round( precision * $('body').scrollTop() / ($(document).height() - $(window).height() - overshoot) ) / precision;
  }

  function seaLevelChange() {
    scrollPercent = calcScrollPercent();

    let riseHeight = initialHeight + scrollPercent * $(window).height();
    ocean.css('height', riseHeight);
  }

  function introAnimation() {
    ocean.animate({
      height: '+=' + initialHeight
    }, { duration: fadeInTime * 1.5, queue: false });
  }

// EVENT LISTENERS
  $('body').scroll(function() {
    ocean.stop();
    requestAnimationFrame(seaLevelChange);
  });

  introAnimation();
  seaLevelChange();
})
