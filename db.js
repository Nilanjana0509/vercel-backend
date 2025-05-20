const mongoose = require('mongoose');
require('dotenv').config();
const mongodbUrl = process.env.MONGODB_URI || 'mongodb+srv://codetuner99:admin@cluster0.blu1u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongodbUrl);
const db = mongoose.connection;
db.on('connected', () => {
    console.log('connected to mongodb server');
});
db.on('error', (err) => {
    console.log('mongodb server connection error: ' + err);
});
db.on('disconnected', () => {
    console.log('mongodb server disconnected');
});
module.exports = db;
