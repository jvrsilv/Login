const express = require('express');

const UserController = require('./controllers/UsersController');


const routes = express.Router();

routes.post('/register', UserController.create);
routes.post('/login', UserController.login);
routes.put('/resetpass', UserController.alterar);


module.exports = routes;