const { getRandomAnimal } = require(`./animalData/getRandomAnimal`)

const { getURL } = require(`./mongoDB/getURL`)
const { getConnectOptions } = require(`./mongoDB/getConnectOptions`)
const MongoClient = require('mongodb').MongoClient;

const run = (async () => {

    const dbName = `Lost_Dog`
    const collectionName = `second collection`

    // Connect to the MongDB server
    const url = await getURL()
    const connectOptions = await getConnectOptions()
    const client = await MongoClient.connect(url, connectOptions);

    await console.log(`Connected to MongoDB server: ${url}`)

    // Get the database
    const db = await client.db(dbName)

    // Create a test collection
    try{
        await db.createCollection(collectionName, function(err, res) {
            if (err) throw err;
            console.log(`Created collection: ${collectionName}`);
        });
    } catch (e) {
        /* Collection already exists */
    }

    const collection = await db.collection(collectionName)

    // Add random animal records
    for(var i = 0; i < 10; i++){
        const animal = await getRandomAnimal()
        await collection.insert(animal)
        console.log(`Added animal: ${animal.id} to collection: ${collectionName}`)
    }

    // Add a set animal
    const animal = await getRandomAnimal()
    await collection.insert(animal)
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