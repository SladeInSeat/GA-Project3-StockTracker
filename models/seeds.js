const User = require('../models/User.js')

User.deleteMany().then(() => {
    const newUser1 = new User({userName: 'Slade Sawyer'})
    return newUser1.save()
}).then(() => {
    const newUser2 = new User({userName: 'Sam Albetta'})
    return newUser2.save()
})