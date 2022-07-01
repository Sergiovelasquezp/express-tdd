const express = require('express');
const userRouter = express.Router();
const routes = require('../constants/constant-routes.js');
const UserController = require('../controllers/users/UserController.js');


userRouter.post(routes.userRoutes.CREATE_USER, UserController.registerUser);


module.exports = userRouter;