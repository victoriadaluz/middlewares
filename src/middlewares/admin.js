module.exports = [
    
    function adminMiddleware (req, res, next) {
        let users = ['Ada', 'Greta', 'Vim', 'Tim']

        let admin = users.filter(users => req.query.user == users)

        if(admin.includes(req.query.user)) {
            res.render('admin', {admin})
        } else {
            res.send('No tienes privilegios para ingresar')
        }
        
        next()
    }

]