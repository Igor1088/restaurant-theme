$(document).ready(function(){

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

});

