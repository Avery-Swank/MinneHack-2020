
$(document).ready(function(){
  //Function for handling submitting forms
  $("#submit_but").click(function(event){
    //Temporary prevent form from submitting
    event.preventDefault();

    //JSON Object for HTTP Requests using Jquery
    var data2 = {};
    data2['ownerFirstName'] = $('#oFName').val();
    data2['ownerLastName'] = $('#oLName').val();
    data2['ownerContactNumber'] = $('#oCNumber').val();
    data2['petName'] = $('#pname').val();
    data2['animalType'] = $('#animalType').val();
    data2['animalDescription'] = $('#description').val();
    data2['dateLost'] = $('#dLost').val();
    data2['latitude'] = $('#lat').val();
    data2['longitude'] = $('#long').val();

		// Debugging
    console.log(data2);

		// Jquery Post
    $.ajax({
      url: 'http://localhost:3000/',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(data2)
    })

    // Empty form and show a 'Successfully Submitted' Prompt
    document.getElementById("animalForm").reset();
    var x = document.getElementById("snackbar");
       x.className = "show";
       setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    });
});
