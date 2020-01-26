var map;

// Call this function to retrieve data on click
function retrieveData(marker){
  window.alert(marker.label + " position is: " + marker.getPosition());
}

// Adds a marker to the map.
function addMarker(latitude, longitude) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: {lat: latitude, lng: longitude},

    // LABELS = ID for marker
    // SWITCH Statements with Dogs and Cats and such, then default labels for others
    //label: labels[labelIndex++ % labels.length],
		label: 'Test',
    map: map
  });
}

//Remove marker from map
function removeMarker(marker) {
  marker.setMap(null);
}



//Creates the map and place markers on map for now
function initMap() {
		var placeOne = {lat: 44.9741, lng: -93.2354};
		// var placeTwo = {lat: 44.9731, lng: -93.2364};
		// var placeThree = {lat: 44.9731, lng: -93.2344};
		// var placeFour = {lat: 44.9721, lng: -93.2354};

		// Zooming in on Coffman Memorial Union
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 44.9731, lng: -93.2354},
      zoom: 15
    });

		// var test = addMarker(44.9731, -93.2364);
		// //OnClick Events that responds to a Click, displays location
		// test.addListener('click', function() {
		// map.setZoom(18);
		// map.setCenter(markerOne.getPosition());
		// //Replace code below to retrieve data and change things
		// // setTimeout(retrieveData(markerOne), 5000)
		// retrieveData(markerOne);
		// });

  	// Jquery Post
		$.ajax({
			url: 'http://localhost:3000/animals',
			type: 'GET',
			contentType: 'application/json',
			datatype: 'json',
			success: function(data) {
            console.log(data);
            alert(data);
						console.log(data);
        		for(var i = 0; i < data.length; i++) {
              const lat = dataIteration.latitude;
              const lon = dataIteration.longitude;
              const marker = addMarker(lat, lon);
            }
//         		parsedData = JSON.parse(data);
//         		var lat = parsedData['latitude'];
//         		var long = parsedData['longitude'];

//         		var test = addMarker(lat, long)
        }
		})

		//Call maps Marker constructor to place the map at location specified
		var markerOne = new google.maps.Marker({
      position: placeOne,
      map: map,
      title: 'Marker One',
      label: 'D'
    });

// 		var markerTwo = new google.maps.Marker({
//       position: placeTwo,
//       map: map,
//       label: 'D2'
//     });

// 		var markerThree = new google.maps.Marker({
//       position: placeThree,
//       map: map,
//       label: 'D3'
//     });

// 		var markerFour = new google.maps.Marker({
//       position: placeFour,
//       map: map,
//       label: 'D4'
//     });

    //OnClick Events that responds to a Click, displays location
    markerOne.addListener('click', function() {
      map.setZoom(18);
      map.setCenter(markerOne.getPosition());
      //Replace code below to retrieve data and change things
      // setTimeout(retrieveData(markerOne), 5000)
      retrieveData(markerOne);
      });
    // markerTwo.addListener('click', function() {
    //   map.setZoom(18);
    //   map.setCenter(markerTwo.getPosition());
    //   retrieveData(markerTwo);
    //   });
    // markerThree.addListener('click', function() {
    //   map.setZoom(18);
    //   map.setCenter(markerThree.getPosition());
    //   retrieveData(markerThree);
    //   });
    // markerFour.addListener('click', function() {
    //   map.setZoom(18);
    //   map.setCenter(markerFour.getPosition());
    //   retrieveData(markerFour);
    //   });
  }
