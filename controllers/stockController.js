Stock = require('../models/Stock.js')
let mongoose = require('mongoose');
const axios = require('axios')


const stockController = {

    findAllStocks: function (req, res) {
        Stock.find()
            .then((stocks) => {
                res.json(stocks)
            })
    },

    findStockByParent: function (req, res) {
        Stock.find({ parentAccount: req.query.parentAccount })
            .then((foundStock) => {
                res.json(foundStock)
            })
    },

    findStockByTicker: function (req, res) {
        Stock.find({ stockTicker: req.query.stockTicker })
            .then((stock) => {
                res.json(stock)
            })
    },

    setStockParentAccount: function (req, res) { 
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
    },

    searchStocks: function (req, res) {
        axios.get("https://www.alphavantage.co/query", {
            params: { function: 'SYMBOL_SEARCH',
                    keywords: req.query.keywords, 
                    apikey: process.env.ALPHAVANTAGE_API_KEY }})
            .then((apiResponse) => {
                let stockList = []
                for (i = 0; i < Object.keys(apiResponse.data.bestMatches).length; i++){
                    let tempStock = {}
                    tempStock['stockName'] = apiResponse.data.bestMatches[i]["2. name"]
                    tempStock['stockTicker'] = apiResponse.data.bestMatches[i]["1. symbol"]
                    tempStock['price'] = 0
                    tempStock['parentAccount'] = null
                    stockList.push(tempStock)
                }
                res.json(stockList)
            })
            .catch((err) => {
                console.log(err)
            })
    },

}

module.exports = stockController;