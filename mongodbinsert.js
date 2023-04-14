const { MongoClient } = require('mongodb');
const { redirect } = require('react-router-dom');

// Connection URI
const uri = 'mongodb+srv://admin:PX8UhUlBwSpPQkxM@letsrollcluster.mongodb.net/letsrollusersdb?retryWrites=true&w=majority';

// Create a new MongoClient
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected successfully to server");
  } catch (error) {
    console.log("Error connecting to database");
  }
    // Select the database
    const db = client.db("letsrollusersdb");
    const collection = client.db("letsrolluserscollection");
    
    connectToDatabase(db).getCollection(collection).insertOne({
          email: "userEmail", password: "password",
        }
      ).redirect('./src/pages/SignIn/SignIn.js');
  return db;
};

module.exports = connectToDatabase;
