User = require('../models/User.js')

const userController = {

    showLandingPage: function (req,res){
        res.send("working in heroku")
    },

    findAllUsers : function (req,res){
        User.find().then(
            (allUsers) => {
                res.json(allUsers)
            }
        )
    },

    findUserByName : function (req,res){
        User.find({userName: req.query.userName}).then(
            (user) => {
                res.json(user)
            }
        )
    },

    createUser : function(req,res){
        User.create({userName: req.body.userName}).then(
            (newUser) => {
                res.json(newUser)
            }
        )
    },

    updateUser: function(req,res){
        User.findByIdAndUpdate(req.body.userId,
                            {userName : req.body.userName}, 
                            {new:true})
            .then( (updatedUser) => {res.json(updatedUser)
        });
    },

    deleteUser: function(req,res){
        User.findByIdAndDelete(req.body._id).then( () => {
            res.json(req.body)
        })
    },

    login: function(req,res){
        console.log(`req.username from controller: ${req.body.userName}`)
        User.findOneAndUpdate({userName: req.body.userName},{},{new: true, upsert: true})
            .then((user => {
                res.json(user)
            }))
    }
}

module.exports = userController;