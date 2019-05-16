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
        User.find({userName: req.params.userName}).then(
            (user) => {
                res.json(user)
            }
        )
    },

    createUser : function(req,res){
        User.create({userName: req.body.userName}).then(
            () => {
                res.redirect('/users')
            }
        )
    },

    updateUser: function(req,res){
        User.findByIdAndUpdate(req.body.userId,
                            {userName : req.body.userName}, 
                            {new:true})
            .then( () => {res.redirect('/users')
        });
    },

    deleteUser: function(req,res){
        User.findByIdAndDelete(req.body.userId).then( () => {
            res.redirect('/users')
        })
    }
}

module.exports = userController;