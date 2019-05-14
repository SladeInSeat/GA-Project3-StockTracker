const mongoose = require('../db/connection.js');

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        lowercase: true,
    }
});

let User = mongoose.model('User',userSchema);

module.exports = User;