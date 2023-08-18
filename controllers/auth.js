
exports.signup = function(req, res, next) {
    const {email, password} = req.body
    // return 'yes'
    res.json({email, password})
}