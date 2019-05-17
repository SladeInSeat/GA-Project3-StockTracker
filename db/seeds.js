const User = require('../models/User.js')
const Account = require('../models/Account.js')
const Stock = require('../models/Stock.js')


User.deleteMany().then(() => {
    User.create([
        {userName: "Slade"},
        {userName: "Sam"}
    ]).then((users) => 
            {console.log("made users: " + users)})
});

Account.deleteMany().then(() => {
    User.find().then( (foundUsers) => {
        Account.create([{accountName: "Slades Account",
                        parentUser: foundUsers[0]._id},
                        {accountName: "Sams Account",
                        parentUser: foundUsers[1]._id}])
    }).then( (newAccounts) => {console.log("created accounts:" + newAccounts)})
    .then(() => {
        Stock.deleteMany().then(() => {
            Account.find().then( (accounts) => {
                Stock.create([{stockName: "Unilever",
                                stockTicker: "UL",
                                price: 59.56,
                                parentAccount: accounts[0]._id},
                                {stockName: "Apple",
                                stockTicker: "AAPL",
                                price: 190.92,
                                parentAccount: accounts[0]._id},
                                {stockName: "Pipestone Inc",
                                stockTicker: "BKBEF",
                                price: 1.32,
                                parentAccount: accounts[1]._id},
                               {stockName: "Rio Tinto",
                                stockTicker: "RIO",
                                price: 58.20,
                                parentAccount: accounts[1]._id}]
                ).then( () => {console.log("created stocks")})
            })
        })
    })
});

