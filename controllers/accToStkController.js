mongoose = require('mongoose')
Account = require('../models/Account.js')
Stock = require('../models/Stock.js')
AccountsAndStocks = require('../models/AccountsAndStocks.js')

const accToStkController = {

    findAllAccounts: async function (req, res) {
        let allAccounts = await AccountsAndStocks.find()
        return res.json(allAccounts)
    },

    findAllAccountsOfUser: async function (req, res) {
        let accountsOfUser = await AccountsAndStocks.find({ parentUser: req.query.parentUser })
        return res.json(accountsOfUser)
    },

    createAccStkRecord: async function (req, res) {
        let newRecord = await AccountsAndStocks.create({
            parentAccount: req.body.parentAccount,
            stockTicker: req.body.stockTicker,
            qty: 0              // qty hardcoded to 0 for now
        })                   
        return res.json(newRecord)
    },

    deleteAccStkRecord: async function (req, res) {
        await AccountsAndStocks.findOneAndDelete({
            parentUser: req.body.parentUser,
            stockId: req.body.stockId
        })
        return res.json(req.body)
    }


}

module.exports = accToStkController;