const mongoose = require('../db/connection.js')
let ObjectId = mongoose.Schema.Types.ObjectId;

const accountSchema = mongoose.Schema({
    accountName: String,
    parentUser: ObjectId
});

let Account = mongoose.model('Account', accountSchema);

module.exports = Account;