const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'A username is required.'],
        unique: true,
        trim: true,
        maxlength: [20, 'A username cannot be longer than 20 characters.'],
        minlength: [3, 'A username must be at least 3 characters long.']
    },
    password: {
        type: String,
        required: [true, 'A password is required.'],
        trim: true,
        maxlength: [100, 'A password cannot be longer than 100 characters.'],
        minlength: [8, 'A password must be at least 8 characters long.']
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;