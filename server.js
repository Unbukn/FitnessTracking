// Dependencies
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
// Define Express route
const app = express();
// Select A PORT to run on
const PORT = process.env.PORT || 8022;
// Set up Express app 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Set up Mongo DB
// db mongo
var MONGODB = process.env.MONGODB_URI;

mongoose.connect(MONGODB || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// Define Express routes
// Creating Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start sever listening
// Starts the server to begin listening
app.listen(PORT, function(){
    console.log(`App listening on Port ${PORT}!`);
});