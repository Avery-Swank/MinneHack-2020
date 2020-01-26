// const express = require('express');
// const app = express();
// const bodyParser= require('body-parser')
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// app.listen(3000, function() {
//       console.log('listening on 3000');
//     });


// app.post('/animal/add', (req, res, next) => {

//         var name = {
//           first_name: req.body.first_name,
//           last_name: req.body.last_name
//         };

//         dbase.collection("name").save(name, (err, result) => {
//           if(err) {
//             console.log(err);
//           }

//           res.send('name added successfully');
//         });
//       });

//Function for handling submitting forms
const handleFormSubmission = event => {
  //Temporary prevent form from submitting
  event.preventDefault();

  var data = {};
  data['name'] = document.getElementsById('fname').value;

  var data2 = {
    name: document.getElementsById('fname').value
    lastname: document.getElementsById('lname').value
   }

  $.post( "test.php", data );


};

//Listener for handling the form submission
const form = document.getElementsByClassName('lost-form')[0];
form.addEventListener('submit', handleFormSubmission);
