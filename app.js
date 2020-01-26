
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



    // Add a record to the newly created collection
    const collection = await db.collection("my test collection")
    console.log(collection.collectionName)
    
    collection.insertOne({id: "123"})
    
})()

Promise.all([run])