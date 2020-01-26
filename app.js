const { getRandomAnimal } = require(`./animalData/getRandomAnimal`)
const { getURL } = require(`./mongoDB/getURL`)
const { getConnectOptions } = require(`./mongoDB/getConnectOptions`)

const MongoClient = require('mongodb').MongoClient;
const express = require('express')
const app = express()

const run = (async () => {

    const expressPort = 3000
    const dbName = `Lost_Dog`
    const collectionName = `second collection`

    // Connect to the MongDB server
    const url = await getURL()
    const connectOptions = await getConnectOptions()
    const client = await MongoClient.connect(url, connectOptions);

    console.log(`Connected to MongoDB server: ${url}`)

    // Open the express server to liston on a port
    await app.listen(expressPort, async () => {
        console.log(`Express App working on port: ${expressPort}`)
    })

    // Get the database
    const db = await client.db(dbName)
    const collection = await db.collection(collectionName)

    // Express POST req
    // Process the request. Add a new animal to the MongoDB
    // TODO: NOT TESTED
    /*await app.post(`/animal/add`, (req, res, next) => {

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

        await collection.insertOne(animal)
        await res.send(`Added animal: ${animal.id} to collection: ${collectionName}`)
        console.log(`Added animal: ${animal.id} to collection: ${collectionName}`)
    })

    // Express GET req
    // Process the request. Get ALL of the animals in the MongoDB
    // TODO: NOT TESTED
    await app.get(`/animal`, async (req, res, next) => {

        await collection.find({}).toArray( async (err, result) => {
            await res.send(result)
        });
    })

    // Express GET req
    // Process the request. Get A SPECIFIC animal in the MongoDB
    // TODO: NOT TESTED
    await app.get(`/animal/:id`, async (req, res, next) => {

        const id = await ObjectID(req.params.id);
        const animal = await collection.find(id)

        await res.send(animal);
    })*/

    // Create a test collection
    try{
        await db.createCollection(collectionName, function(err, res) {
            if (err) throw err;
            console.log(`Created collection: ${collectionName}`);
        });
    } catch (e) {
        /* Collection already exists */
    }

    // Add random animal records
    for(var i = 0; i < 10; i++){
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
    await client.close()

})()

Promise.all([run])
