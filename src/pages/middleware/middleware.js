const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const { MongoClient } = require('mongodb');
const { redirect } = require('react-router-dom');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:PX8UhUlBwSpPQkxM@letsrollcluster.e9fzfgl.mongodb.net/letsrollsusersdb');

// Connection URI
const uri = 'mongodb+srv://admin:PX8UhUlBwSpPQkxM@letsrollcluster.e9fzfgl.mongodb.net/letsrollusersdb?retryWrites=true&w=majority';
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
    
    connectToDatabase(db).getCollection(collection).insertOne({"_id":{"$oid":"64384c1c480d8da9b7e13a44"},"blocked":[""],"club":"Northmead Bowls Club","district":"Ekurhuleni","email":"sean@seanpatterson.co.za","friends":[""],"honours":[""],"password":"LL0921jj","position":"lead","posts":[""],"profileImg":"profile 1.png","profileUrl":"/profile/sean","reputation":"","timestamp":{"$timestamp":{"t":1681413869,"i":2}},"username":"Sean"}).redirect('./src/pages/SignIn/SignIn.js');
  return db;
};

app.post('/login', requiresAuth(), (req, res) => {
  const { email, password } = req.body;
  res.send(JSON.stringify(req.oidc.user));
});

module.exports = () => {
  console.log('Connected to MongoDB')
};
