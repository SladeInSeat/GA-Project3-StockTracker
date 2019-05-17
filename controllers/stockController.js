Stock = require('../models/Stock.js')

const stockController = {

    findAllStocks : function (req,res){
        Stock.find()
            .then((stocks) => {
                res.json(stocks)
        })
    },

    findStockByTicker : function (req,res){
        Stock.find({stockTicker: req.query.stockTicker})
            .then((stock) => {
                res.json(stock)
            })
    },

    setStockParentAccount : function (req,res){
        Stock.find({stockTicker: req.query.stockTicker})
            .then((foundStock) => {
                Stock.findByIdAndUpdate(foundStock._id,
                                        {$set: {parentAccount: req.query.parentAccount}}
                )
            })
    },

    removeStockParentAccount : function (req,res){
        Stock.find({stockTicker: req.query.stockTicker})
            .then((foundStock) => {
                Stock.findByIdAndUpdate(foundStock._id,
                                        {$set:{parentAccount: ""}}
                )
            })
    }


}

module.exports = stockController;