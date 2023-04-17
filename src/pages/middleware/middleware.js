const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const { MongoClient } = require('mongodb');
const { redirect } = require('react-router-dom');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:PX8UhUlBwSpPQkxM@letsrollcluster.e9fzfgl.mongodb.net/letsrollusersdb');

// Connection URI
const uri = 'mongodb+srv://admin:PX8UhUlBwSpPQkxM@letsrollcluster.mongodb.net/letsrollusersdb?retryWrites=true&w=majority';
// Create a new MongoClient
const client = new MongoClient(uri);

const app = express(); 

app.post('/signup', requiresAuth(), (req, res) => {
  const { email, password } = req.body;
  res.send(JSON.stringify(req.oidc.user));
});

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

app.post('/login', requiresAuth(), (req, res) => {
  const { email, password } = req.body;
  res.send(JSON.stringify(req.oidc.user));
});

module.exports = () => {
  console.log('Connected to MongoDB')
};