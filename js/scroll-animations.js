$( document ).ready( function() {

  var wrapper = $("#wrapper");
  var ocean = $("#ocean");

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

    console.log(wrapper.height());
    console.log($(window).height());
    console.log($(document).height());

    riseHeight = initialHeight + scrollPercent * $(window).height();

    //console.log(riseHeight);

    ocean.css('height', riseHeight);
  }

// EVENT LISTENERS
  $(window).scroll(function() {
    requestAnimationFrame(seaLevelChange);
  });

  seaLevelChange();
})
