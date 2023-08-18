const User = require("../models/User")

exports.signup = async function() {
    const user = await User.create({
        email: "abc",
        password: '123'
    })
    return 'yes'
}