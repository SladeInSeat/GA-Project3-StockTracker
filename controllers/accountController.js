Account = require('../models/Account.js')
User = require('../models/User.js')

const accountController = {

    findAllAccounts : function (req,res){
        Account.find().then( (accounts) => {
            res.json(accounts)
        })
    },

    findAccountsOfUser : function (req,res){
        User.findById(req.body.userId)
    }



};

module.exports = accountController;