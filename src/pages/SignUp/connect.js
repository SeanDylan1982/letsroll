const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:PX8UhUlBwSpPQkxM@letsrollcluster.e9fzfgl.mongodb.net/letsrollusersdb');

module.exports = () =>{
  console.log('Connected to MongoDB')
};
