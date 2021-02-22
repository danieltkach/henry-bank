const User = require('./userModel')

const getUsers = (req,res) => {
    User.find()
    .then(resp => {
        res.status(200).json({
            ok: true,
            resp
        })
    })
    .catch(error => {
        res.status(400).json(error)
    })
}

module.exports= {
    getUsers,
}