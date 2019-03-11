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

    if(scrollPercent > 0) {
      arrow.fadeTo('medium', 0);
    }

    var riseHeight = initialHeight + scrollPercent * $(window).height();

    ocean.css('height', riseHeight);
  }

  function introFade() {
    arrow.hide();
    arrow.css("visibility", "visible");

      var fadeInTime = 600;
      arrow.fadeIn({ duration: fadeInTime * 1.5, queue: false });

      arrow.animate({
        bottom: '-=15px'
      }, { duration: fadeInTime * 1.5, queue: false });

      ocean.animate({
        height: '+=' + initialHeight
      }, { duration: fadeInTime * 1.5, queue: false });
  }

// EVENT LISTENERS
  $(window).scroll(function() {
    requestAnimationFrame(seaLevelChange);
  });

  if($(window).scrollTop() < 1) {
    introFade();
  }
  seaLevelChange();
})
