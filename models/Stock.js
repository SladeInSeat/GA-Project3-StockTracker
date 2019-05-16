const mongoose = require('../db/connection.js')
let ObjectId = mongoose.Schema.Types.ObjectId

const stockSchema = mongoose.Schema({
    stockName : String,
    stockTicker : String,
    price: Number,
    parentAccount: ObjectId
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;

