const authService = require('../services/auth')

exports.signup = function(req, res, next) {
    const {email, password} = req.body
    // return 'yes'
    const result = authService.signup()
    res.json({result})
}