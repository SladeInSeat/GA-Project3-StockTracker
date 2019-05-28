const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')
const accountController = require('../controllers/accountController.js')
const stockController = require('../controllers/stockController.js')
const accToStkController = require('../controllers/accToStkController.js')

//   show all users
router.get("/users", userController.findAllUsers)

//  show landing page
router.get("/", userController.showLandingPage)

//  find user by name, create if does not exist
router.patch("/login", userController.login)

//  find user by name
router.get("/user", userController.findUserByName)

//  create user //not used, functionality covered by /login
router.post("/users", userController.createUser)

//  update user
router.patch("/users", userController.updateUser)

//  delete user
router.delete("/users", userController.deleteUser)

//  show all accounts
router.get("/accounts", accountController.findAllAccounts)

//  show account belonging to user
router.get("/account", accountController.findAccountsOfUser)

//  create account
router.post("/accounts", accountController.createAccount)

//  patch account
router.patch("/accounts", accountController.updateAccount)

//  delete account
router.delete("/accounts", accountController.deleteAccount)

//  show all stocks
router.get("/stocks", stockController.findAllStocks)

//  find stock by ticker
router.get("/stocks/ticker", stockController.findStockByTicker)

//  find stock by accountParent Id
router.get("/stocks/parentAccount/", stockController.findStockByParent)

// add id to accountParent
router.patch("/stocks/setParentAccount", stockController.setStockParentAccount)

// remove id from accountParent
router.patch("/stocks/removeParentAccount", stockController.removeStockParentAccount)

module.exports = router 