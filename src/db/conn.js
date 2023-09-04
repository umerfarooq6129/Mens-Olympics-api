const mongoose = require('mongoose');

const db = mongoose.connect("mongodb+srv://pract:pract@cluster0.pxomqby.mongodb.net/pract?retryWrites=true&w=majority")
   .then(() => console.log("Connected to MongoDB"))
   .catch((err)=> console.log("no Connecton",err));

module.exports = db;