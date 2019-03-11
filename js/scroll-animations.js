$( document ).ready( function() {

  var wrapper = $("#wrapper");
  var ocean = $("#ocean");

  var arrow = $("#arrow-down");

  var scrollPercent = 0;
  var initialHeight = 60;
  var overshoot = 10;

// SETUP

// FUNCTIONS
  function seaLevelChange() {
    let precision = 10000;
    scrollPercent = Math.round( precision * $(window).scrollTop() / ($(document).height() - $(window).height() - overshoot) ) / precision;

    if(scrollPercent > 0) {
      $('#arrow-down').fadeTo('medium', 0);
    }

    var riseHeight = initialHeight + scrollPercent * $(window).height();

    ocean.css('height', riseHeight);
  }

  function introFade() {
    arrow.hide();
    arrow.css("visibility", "visible");

    var fadeInTime = 1200;

    arrow.fadeIn({ duration: fadeInTime / 3, queue: false });

    arrow.animate({
      bottom: '-=15px'
    }, { duration: fadeInTime / 2, queue: false });
  }

  function animate() {
    seaLevelChange();
  }

// EVENT LISTENERS
  $(window).scroll(function() {
    requestAnimationFrame(animate);
  });

  seaLevelChange();
  introFade();
})
