const { getRandomAnimal } = require(`./animalData/getRandomAnimal`)
const { getURL } = require(`./mongoDB/getURL`)
const { getConnectOptions } = require(`./mongoDB/getConnectOptions`)

const MongoClient = require('mongodb').MongoClient;
const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser').json()

const run = (async () => {

    const expressPort = 3000
    const serverPort = 3000
    const dbName = `Lost_Dog`
    const collectionName = `animal collection`

    // Connect to the MongDB server
    const url = await getURL()
    const connectOptions = await getConnectOptions()
    const client = await MongoClient.connect(url, connectOptions);
    console.log(`Connected to MongoDB server: ${url}`)

    // Open and Connect to the Express server
    await app.use(bodyParser);
    await app.use(cors())
    await app.listen(serverPort, function() {
        console.log(`Express Server Listening on port: ${serverPort}`);
    });

    // Get the MongoDB animals database and collection
    const db = await client.db(dbName)
    const collection = await db.collection(collectionName)


    // Create the animals collection
    try{
        await db.createCollection(collectionName, function(err, res) {
            if (err) throw err;
            console.log(`Created collection: ${collectionName}`);
        });
    } catch (e) {/* Collection already exists */}


    // Clear the Collection
    const animals = await collection.find({}).toArray()
    for(const animal of animals){
        await collection.deleteOne(animal)
    }
    console.log(`Deleted All Records in collection: ${collectionName}`)

    // Populate Collection with random animals
    for(var i = 0; i < 10; i++){
        const animal = await getRandomAnimal()
        await collection.insertOne(animal)
        console.log(`Added Random Animal: ${animal.id} to collection: ${collectionName}`)
    }

    // Express Handle for the `Add Lost Animal` form POST requests
    app.post('/', async function(req, res){

        const animal = {}
        animal.id = "123"
        animal.petName = req.body.petName
        animal.ownerFirstName = req.body.ownerFirstName
        animal.ownerLastName = req.body.ownerLastName
        animal.contact = req.body.ownerContactNumber
        animal.animalType = req.body.animalType
        animal.animalDescription = req.body.animalDescription
        animal.dateLost = req.body.dateLost
        animal.latitude = req.body.latitude
        animal.longitude = req.body.longitude

        console.log(`POST Animal to the database`);
        console.log(animal);

        await collection.insertOne(animal)
        console.log(`Added Animal: ${animal.petName} to Collection: ${collectionName}`)
    });

    // Express Handle for GET all animals in the database.
    // This is used to populate the Google Maps viewer
    app.get('/animals', async function(req, res){

        const animals = await collection.find({}).toArray()

        await res.send(animals)
        console.log(`GET all animals in the database`)
    });

    // Add random animal records
    /*for(var i = 0; i < 10; i++){
        const animal = await getRandomAnimal()
        await collection.insertOne(animal)
        console.log(`Added animal: ${animal.id} to collection: ${collectionName}`)
    }

    // Add a set animal
    const animal = await getRandomAnimal()
    await collection.insertOne(animal)
    console.log(`Added set animal: ${animal.id} to collection: ${collectionName}`)

    // Remove that animal
    await collection.deleteOne(animal)
    console.log(`Removed set animal: ${animal.id} from collection: ${collectionName}`)

    // Get all animals in the collection
    const animals = await collection.find({}).toArray()
    console.log(`All Animals:`)
    for(var a of animals){
        console.log(`Animal id: ${a.id} and name: ${a.name}`)
    }

    // Close the client (may have to delete later)
    await client.close()*/

})()

Promise.all([run])
