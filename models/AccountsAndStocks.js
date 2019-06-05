const mongoose = require('mongoose')
let ObjectId = mongoose.Schema.Types.ObjectId;

const AccntsToStocksSchema = mongoose.Schema({
    parentUser : ObjectId,
    parentAccount: ObjectId,
    stockId : ObjectId,
    qty : Number
});

let AccToStk = mongoose.model('AccToStk', AccntsToStocksSchema);

module.exports = AccToStk;