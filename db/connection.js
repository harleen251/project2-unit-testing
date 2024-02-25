require('dotenv').config();
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://project2UnitTest:PWjqrodmGFfECe4l@cluster0.qhhoxll.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 

////EXAMPLE////
// Make sure to create .env file and use an environment variable

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;
