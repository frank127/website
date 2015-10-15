var ContactPage = function () {

    return {
        
    	//Basic Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				scrollwheel: false,				
				lat: 43.814930,
				lng: -79.349759
			  });
			  
			  var marker = map.addMarker({
				lat: 43.814930,
				lng: -79.349759,
	            title: 'Verico Elite Choice Mortgage Group',
                infoWindow: {
                    content: '<p><b>Verico Elite Choice Mortgage Group</b><br />7050 Woodbine Ave, Suite 101<br />Markham ON L3R 4G8</p>'
                }
		       });
			});
        },

        //Panorama Map
        initPanorama: function () {
		    var panorama;
		    $(document).ready(function(){
		      panorama = GMaps.createPanorama({
		        el: '#panorama',
		        lat : 43.814930,
		        lng : -79.349759
		      });
		    });
		}        

    };
}();