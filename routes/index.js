const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')

//   show all users
router.get("/users", userController.findAllUsers)

//  show landing page
router.get("/", userController.showLandingPage)

//  find user by name
router.get("/user/:userName", userController.findUserByName)

//  create user
router.post("/users", userController.createUser)

//  update user
router.patch("/users", userController.updateUser)

//  delete user
router.delete("/users", userController.deleteUser)


module.exports = router 