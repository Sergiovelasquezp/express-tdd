const express = require('express');
const app = express();
const UserRouter = require('./routes/UserRoutes.js');
const routes = require('./constants/constant-routes.js');

//user routes
app.use(routes.userRoutes.USERS_BASE_URI, UserRouter);

module.exports = app;