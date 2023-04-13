const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://admin:PX8UhUlBwSpPQkxM@<cluster>.mongodb.net/letsrollusersdb?retryWrites=true&w=majority';

// Create a new MongoClient
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected successfully to server");

    // Select the database
    const db = client.db("letsrollusersdb");

    // Insert a document into a collection
    const collection = db.collection("letsrolluserscollection");
    const document = { name: "Sean Patterson", age: 40, email: "sean@seanpatterson.co.za", password: "LL0921jj" };
    await collection.insertOne(document);
    console.log("Inserted a document into the collection");

    // Find documents in a collection
    // const query = { age: { $gte: 18 } };
    // const documents = await collection.find(query).toArray();
    // console.log("Found the following documents:");
    // console.log(documents);

    // Update a document in a collection
    // const filter = { name: "John Doe" };
    // const update = { $set: { age: 40 } };
    // const result = await collection.updateOne(filter, update);
    // console.log(`${result.modifiedCount} document(s) updated`);

    // Delete a document from a collection
    // const deleteFilter = { name: "John Doe" };
    // const deleteResult = await collection.deleteOne(deleteFilter);
    // console.log(`${deleteResult.deletedCount} document(s) deleted`);

  } catch (err) {
    console.error(err);
  } finally {
    // Close the client
    await client.close();
    console.log("Client closed");
  }
}

connectToDatabase();


// Select the database to use.
// use('letsrollusersdb');

// Insert a few documents into the sales collection.
// db.getCollection('letsrolluserscollection').insertOne([
//   { 'email': 'sean@seanpatterson.co.za', 'name': 'Sean', 'password': 'LL0921jj', 'date': new Date(new Date) },
// ]);
