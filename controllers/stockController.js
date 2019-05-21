Stock = require('../models/Stock.js')
let mongoose = require('mongoose');

const stockController = {

    findAllStocks: function (req, res) {
        Stock.find()
            .then((stocks) => {
                res.json(stocks)
            })
    },

    findStockByParent: function (req, res) {
        Stock.find({ parentAccount: req.body.parentAccount })
            .then((foundStock) => {
                res.json(foundStock)
            })
    },

    findStockByTicker: function (req, res) {
        Stock.find({ stockTicker: req.body.stockTicker })
            .then((stock) => {
                res.json(stock)
            })
    },

    setStockParentAccount: function (req, res) { // runs find twice, needs fixing
        Stock.findByIdAndUpdate(req.body.stockId,
            { $set: {parentAccount: mongoose.Types.ObjectId(req.body.parentAccount)}},
            {new: true})
            .then((stock) => {
                res.json(stock)
            });
    },

    removeStockParentAccount: function (req, res) {
        Stock.findByIdAndUpdate(req.body.stockId,
            { $set: { parentAccount: null } },
            { new: true })
            .then((updatedStock) => {
                res.json(updatedStock)
            });
    }
}


module.exports = stockController;