User = require('../models/User.js')

const userController = {

    findAllUsers : function (req,res){
        User.find().then(
            (allUsers) => {
                res.json(allUsers)
            }
        )
    },

    findUserByName : function (req,res){
        User.find({userName: req.body.userName}).then(
            (user) => {
                res.json(user)
            }
        )
    },

    createUser : function(req,res){
        User.create(req.body).then(
            () => {
                res.redirect('/allUsers')
            }
        )
    },

    updateUser: function(req,res){
        User.findByIdAndUpdate(req.params.userId,
                             {userName : req.body.userName}, 
                            {new:true})
            .then( () => {res.redirect('/allUsers')
        });
    },

    deleteUser: function(req,res){
        User.findByIdAndDelete(req.params.userId).then( () => {
            res.redirect('/allUsers')
        })
    }
}

module.exports = userController;