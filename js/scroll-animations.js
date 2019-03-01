$( document ).ready( function() {

  var wrapper = $("#wrapper");
  var footer = $("#footer");

  var windowHeight = $(window).height();
  var scrollPercent = 0;
  var riseHeight = 0;
  var initialHeight = 30;

// SETUP
  var classes = ['rise'];
  var ids = [];

  for (var i=0; i<classes.length; i++) {
    $('.' + classes[i]).each(function(j, obj) {
      // give every instance of classes[i] an id of form '#classname1', ''#classname2', etc.
      $(obj).attr('id', classes[i] + j);
      ids.push(classes[i] + j);
    });
  }

  var riseAmount = $(window).height() / ids.length;

// FUNCTIONS
  function seaLevelChange() {
    let precision = 10000;
    scrollPercent = Math.round( precision * $(window).scrollTop() / ($(document).height() - $(window).height()) ) / precision;

    riseHeight = initialHeight + scrollPercent * windowHeight;
    footer.css('height', riseHeight);
  }

// EVENT LISTENERS
  $(window).scroll(function() {
    requestAnimationFrame(seaLevelChange);
  });

  seaLevelChange();
})
