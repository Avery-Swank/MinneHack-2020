
const { getURL } = require(`./getURL`)
const { getConnectOptions } = require(`./getConnectOptions`)
const { getDatabase } = require(`./getDatabase`)

const MongoClient = require('mongodb')

const deleteDocument = async (collectionName = ``, document = {}) => {
    
    const url = await getURL()
    const connectOptions = await getConnectOptions()

    // Connect to the MongoDB server
    const client = await MongoClient.connect(url, connectOptions);

    // Get the database
    const dbName = await getDatabase()
    const db = await client.db(dbName)

    // Get the collection
    const collection = await db.collection(collectionName)

    await collection.remove(document)
}

module.exports = {
    deleteDocument
}