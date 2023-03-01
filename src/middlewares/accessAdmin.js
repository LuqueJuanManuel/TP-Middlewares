const admins = ['greta', 'ada', 'tim', 'vim']
module.exports = (req, res, next) => {

    if(admins.includes(req.query.admin)) {
        res.send("Hola admin: " + req.query.admin)
        next()
    }

    res.send("No tienes los privilegios para ingresar")
}