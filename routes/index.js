const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')

//   show all users
router.get("/users", userController.findAllUsers)

//  show landing page
router.get("/", userController.showLandingPage)


module.exports = router 