const mongoose = require('mongoose')
let ObjectId = mongoose.Schema.Types.ObjectId;

const AccntsToStocksSchema = mongoose.Schema({
    parentAccount: ObjectId,
    stockTicker : String,
    qty : Number
});

let AccToStk = mongoose.model('AccToStk', AccntsToStocksSchema);

module.exports = AccToStk;