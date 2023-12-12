const path = require('path');
const { default: mongoose } = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

require('dotenv').config();

// database connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/';

const client = new MongoClient(mongoURI);

client.connect();
mongoose.connect(mongoURI);

// endpoints

exports.ping = (res) => {
    res.send('pong');
};

exports.getRobots = async (res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'robot/robots.txt'));
};

exports.getRobotsMinified = async (res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'robot/robots.min.txt'));
};

