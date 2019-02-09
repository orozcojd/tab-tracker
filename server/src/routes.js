//routes are used for declaring routes to all the controllers

const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const SongsController = require('./controllers/SongsController');

module.exports = (app) => {
    app.post('/register',  
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
    app.post('/login',  
        AuthenticationController.login)

    /* routes for post/get songs */
    app.get('/songs',  
        SongsController.index)
    app.post('/songs',  
        SongsController.post)
}