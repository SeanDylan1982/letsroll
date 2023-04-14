const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    "properties": {
        "_id": {
            "bsonType": "objectId"
        },
        "blocked": {
            "bsonType": "array",
            "items": {
                "bsonType": "string"
            }
        },
        "club": {
            "bsonType": "string"
        },
        "district": {
            "bsonType": "string"
        },
        "email": {
            "bsonType": "string"
        },
        "friends": {
            "bsonType": "array",
            "items": {
                "bsonType": "string"
            }
        },
        "honours": {
            "bsonType": "array",
            "items": {
                "bsonType": "string"
            }
        },
        "password": {
            "bsonType": "string"
        },
        "position": {
            "bsonType": "string"
        },
        "posts": {
            "bsonType": "array",
            "items": {
                "bsonType": "string"
            }
        },
        "profileImg": {
            "bsonType": "string"
        },
        "profileUrl": {
            "bsonType": "string"
        },
        "reputation": {
            "bsonType": "string"
        },
        "timestamp": {
            "bsonType": "string"
        },
        "username": {
            "bsonType": "string"
        }
    },
    "title": "User"
});

const User = mongoose.model('User', userSchema);

module.exports = User;
