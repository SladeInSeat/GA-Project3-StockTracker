User = require('../models/User.js')

const userController = {

    showLandingPage: function (req, res) {
        res.send("working in heroku")
    },

    // findAllUsers: function (req, res) {
    //     User.find()
    //         .then(
    //             (allUsers) => {
    //                 res.json(allUsers)
    //             }
    //         )
    // },

    findAllUsers: async function (req, res) {
        let allUsers = await User.find()
        return res.json(allUsers)
    },

    // findUserByName: function (req, res) {
    //     User.find({ userName: req.query.userName })
    //         .then(
    //             (user) => {
    //                 res.json(user)
    //             }
    //         )
    // },
    findUserByName: async function (req, res) {
        let foundUser = await User.find({ userName: req.query.userName })
        return res.json(foundUser)
    },

    // createUser: function (req, res) {
    //     User.create({ userName: req.body.userName })
    //         .then(
    //             (newUser) => {
    //                 res.json(newUser)
    //             }
    //         )
    // },
    createUser: async function (req, res) {
        let newUser = await User.create({ userName: req.body.userName })
        return res.json(newUser)
    },

    // updateUser: function (req, res) {
    //     User.findByIdAndUpdate(req.body.userId,
    //         { $set: { userName: req.body.userName } },
    //         { new: true })
    //         .then((updatedUser) => {
    //             res.json(updatedUser)
    //         });
    // },
    updateUser: async function (req, res) {
        let updatedUser = await User.findByIdAndUpdate(req.body.userId,
            { $set: { userName: req.body.userName } },
            { new: true })
        return res.json(updateUser)
    },

    // deleteUser: function (req, res) {
    //     User.findByIdAndDelete(req.body._id)
    //         .then(() => {
    //             res.json(req.body)
    //         })
    // },
    deleteUser: async function (req, res) {
        await User.findByIdAndDelete(req.body._id)
        return res.json(req.body)
    },

    // login: function (req, res) {
    //     User.findOneAndUpdate({ userName: req.body.userName },
    //         {},
    //         {
    //             new: true,
    //             upsert: true
    //         })
    //         .then((user => {
    //             res.json(user)
    //         }))
    // }
    login: async function (req, res) {
        let loginUser = await User.findOneAndUpdate({ userName: req.body.userName },
            {},
            {
                new: true,
                upsert: true
            })
        return res.json(loginUser)
    }
}

module.exports = userController;