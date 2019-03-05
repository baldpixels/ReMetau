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

    riseHeight = initialHeight + scrollPercent * $(window).height();

    ocean.css('height', riseHeight);
  }

  function animateIn(element) {
    $($(element)).css('visibility', 'visible');

    if($(element).hasClass('title') || $(element).hasClass('textCenter')) {
      $(element).addClass('animated fadeInDown');
    }
    else if($(element).hasClass('subtitle')) {
      $(element).addClass('animated fadeInUp');
    }
    else if($(element).hasClass('textLeft') || $(element).hasClass('mediaLeft') || $(element).hasClass('captionLeft')) {
      $(element).addClass('animated fadeInLeft');
    }
    else if($(element).hasClass('textRight') || $(element).hasClass('mediaRight') || $(element).hasClass('captionRight')) {
      $(element).addClass('animated fadeInRight');
    }
    else if($(element).hasClass('icon')) {
      $(element).addClass('animated zoomIn');
    }
    else {
      $(element).addClass('animated fadeInUp');
    }
  }

  // these classes should animate in on scroll...
  var classes = ['textLeft', 'textRight', 'textCenter', 'title', 'subtitle', 'icon', 'mediaLeft', 'mediaRight', 'captionLeft', 'captionRight'];
  var ids = [];

  for (var i=0; i<classes.length; i++) {
    $('.' + classes[i]).each(function(j, obj) {
      // give every instance of classes[i] an id of form '#classname1', ''#classname2', etc.
      $(obj).attr('id', classes[i] + j);
      ids.push(classes[i] + j);
    });
  }

  // now attach Waypoint object to each id
  for (var i=0; i<ids.length; i++) {
    var waypoint = new Waypoint({
      element: document.getElementById(ids[i]),
      handler: function(direction) {
        if(direction == 'down') {
          //animateIn(this.element);
        }
      },
      offset: '120%'
    });
  }

// EVENT LISTENERS
  $(window).scroll(function() {
    requestAnimationFrame(seaLevelChange);
  });

  seaLevelChange();
})
