
const express = require('express')
const app = express()
const bodyParser = require('body-parser').json()

const run = (async () => {

    const serverPort = 3000

    app.listen(serverPort, function() {
        console.log(`Listening on server port: ${serverPort}`);
    });

    // Test it is working at http://localhost:3000
    app.get('/', function(req, res) {
        res.send("Yep it's working");
    });

    // Express POST req
    // Process the request. Add a new animal to the MongoDB
    app.post(`/animal/add`, bodyParser, (req, res, next) => {

        const animal = {}

        animal.id = req.body.id
        animal.name = req.body.name
        animal.animalType = req.body.animalType
        animal.animalDescription = req.body.animalDescription
        animal.contact = req.body.contact
        animal.dateLost = req.body.dateLost
        animal.cityList = req.body.cityList
        animal.latitude = req.body.latitude
        animal.longitude = req.body.longitude

        res.send(`Posted animal: ${animal.id} to collection`)
        console.log(`Posted animal: ${animal.id} to collection`)
    })

    // Express GET req
    // Process the request. Get A SPECIFIC animal in the MongoDB
    app.get(`/animal/:id`, (req, res, next) => {

        const id = req.params.id;
        //const animal = await collection.find(id)
         
        res.send(`req GET animal: ${id}`);
    })
    
})()

Promise.all([run])