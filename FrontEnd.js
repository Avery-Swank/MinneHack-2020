var map;

// Call this function to retrieve data on click
function retrieveData(marker){
  window.alert(marker.getTitle() + " pet name is located at: " + marker.getPosition());
}

// Adds a marker to the map.
function addMarker(latitude, longitude, data) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: {lat: latitude, lng: longitude},
		label: 'Test',
    map: map,
    Title: data.petName

  });
};

//Remove marker from map
function removeMarker(marker) {
  marker.setMap(null);
}

//Creates the map and place markers on map for now
function initMap() {
		var placeOne = {lat: 44.9741, lng: -93.2354};

		// Zooming in on Coffman Memorial Union
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 44.9731, lng: -93.2354},
      zoom: 15
    });

  	// Jquery Post
		$.ajax({
			url: 'http://localhost:3000/animals',
			type: 'GET',
			contentType: 'application/json',
			datatype: 'json',
			success: function(data) {
            console.log(data);
            // alert(JSON.stringify(data));
						console.log(data);
        		for(var i = 0; i < data.length; i++) {
              const lat = parseFloat(data[i].latitude);
              const lon = parseFloat(data[i].longitude);
              const marker = addMarker(lat, lon, data[i]);
            }
        }
		})

		//Call maps Marker constructor to place the map at location specified
		var markerOne = new google.maps.Marker({
      position: placeOne,
      map: map,
      title: 'Marker One',
      label: 'D'
    });

    //OnClick Events that responds to a Click, displays location
    markerOne.addListener('click', function() {
      map.setZoom(18);
      map.setCenter(markerOne.getPosition());
      //Replace code below to retrieve data and change things
      // setTimeout(retrieveData(markerOne), 5000)
      retrieveData(markerOne);



      });
  }
