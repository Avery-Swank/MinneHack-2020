
const { getURL } = require(`./getURL`)
const { getConnectOptions } = require(`./getConnectOptions`)
const { getDatabase } = require(`./getDatabase`)

const MongoClient = require('mongodb')

const createCollection = async (collectionName = ``) => {
    
    const url = await getURL()
    const connectOptions = await getConnectOptions()

    // Connect to the MongoDB server
    const client = await MongoClient.connect(url, connectOptions);

    // Get the database
    const dbName = await getDatabase()
    const db = await client.db(dbName)

    // Create the collection with name 'collectionName'
    await db.createCollection(collectionName, function(err, res) {
        if (err) throw err;
        console.log(`Created Collection: ${collectionName}!`);
    });
}

module.exports = {
    createCollection
}