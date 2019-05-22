const User = require('../models/User.js')
const Account = require('../models/Account.js')
const Stock = require('../models/Stock.js')
const mongoose = require('mongoose')

async function buildSeeds() {
    await User.deleteMany()
    let createdUsers = await User.create({ userName: "Slade" }, { userName: "Sam" })
    console.log(createdUsers)

    await Account.deleteMany()
    let createdAccounts = await Account.create(
        { accountName: "Slades Account", parentUser: createdUsers[0]._id },
        { accountName: "Sams Account", parentUser: createdUsers[1]._id });
    console.log(createdAccounts)

    await Stock.deleteMany()
    let createdStocks = await Stock.create(
        {
            stockName: "Unilever",
            stockTicker: "UL",
            price: 59.56,
            parentAccount: createdAccounts[0]._id
        },
        {
            stockName: "Apple",
            stockTicker: "AAPL",
            price: 190.92,
            parentAccount: createdAccounts[0]._id
        },
        {
            stockName: "Pipestone Inc",
            stockTicker: "BKBEF",
            price: 1.32,
            parentAccount: createdAccounts[1]._id
        },
        {
            stockName: "Rio Tinto",
            stockTicker: "RIO",
            price: 58.20,
            parentAccount: createdAccounts[1]._id
        });

    console.log(createdStocks)

    await mongoose.disconnect()
}

buildSeeds();

