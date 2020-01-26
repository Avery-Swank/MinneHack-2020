var map;

function initMap() {
  			var placeOne = {lat: 44.9741, lng: -93.2354};
  			var placeTwo = {lat: 44.9731, lng: -93.2364};
  			var placeThree = {lat: 44.9731, lng: -93.2344};
  			var placeFour = {lat: 44.9721, lng: -93.2354};
  			
  			// Zooming in on Coffman Memorial Union
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 44.9731, lng: -93.2354},
          zoom: 15
        });
  
  			var markerOne = new google.maps.Marker({
          position: placeOne, 
          map: map
        });
  
  			var markerTwo = new google.maps.Marker({
          position: placeTwo, 
          map: map
        });
  
  			var markerThree = new google.maps.Marker({
          position: placeThree, 
          map: map
        });
  
  			var markerFour = new google.maps.Marker({
          position: placeFour, 
          map: map
        });
      }

