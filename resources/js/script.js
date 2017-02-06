$(document).ready(function(){
	
	$('.js--section-about').waypoint(function(direction) {
      if(direction =="down") {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    }, {
      offset: '60px'
    });

	/* Map */
	var map = new GMaps({
	  div: '.map',
	  lat: 40.705311,
	  lng: -74.25,

	});

	map.addMarker({
	  lat: 40.705311,
	  lng: -74.2582014,
	  title: 'New York',
	  infoWindow: {
	  	content: '<p>Our location</p>'
	  }
	});

	/* Navigation scroll */
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

});

