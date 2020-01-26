const { getRandomAnimal } = require(`./animalData/getRandomAnimal`)


const MongoClient = require('mongodb').MongoClient;

// User: Avery
// Password: LrYpkszH7nkIzhJj
const url = "mongodb+srv://Avery:LrYpkszH7nkIzhJj@cluster0-3te8l.gcp.mongodb.net/test?retryWrites=true&w=majority";

const run = (async () => {

    // Connect to the MongDB server
    const connectOptions = { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    }
    const client = await MongoClient.connect(url, connectOptions);

    await console.log(`Connected to MongoDB server: ${url}`)

    // Get the database
    const db = await client.db("Lost_Dog")

    // Create a test collection
    await db.createCollection("my test collection", function(err, res) {
        if (err) throw err;
        console.log(`Collection created!`);
    });

    const collection = await db.collection("my test collection")

    // Add random animal records
    for(var i = 0; i < 10; i++){
        const animal = await getRandomAnimal()
        await  collection.insertOne(animal)
        console.log(`Added animal: ${animal.id} to the database`)
    }
    
})()

Promise.all([run])