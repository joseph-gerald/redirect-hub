const path = require('path');
const { default: mongoose } = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const User = require('../models/user');

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

// authentication
exports.login = async (req, res) => {
    
    const { username, password } = req.body;

    if (!username || !password) return res.status(400).send("fields missing");

    

}

exports.register = async (req, res) => {

    if (!req.body) return res.sendStatus(400)

    const { username, password } = req.body;

    if (!username || !password) return res.status(400).send("fields missing");

    const userFound = await User.findOne({ username: username });

    if (userFound) return res.status(400).send("user already exists");

    if (password.length < 8) return res.status(400).send("password too short");

    const user = new User({
        username: username,
        password: password
    });

    user.save();

    res.status(200).send("user created");
}
