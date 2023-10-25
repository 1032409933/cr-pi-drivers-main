const { Router } = require("express");
const usersRouter = Router();
const { getDriverHandler, getDriverHandlerId, postDriverHandler } = require ("../handlers/driverHandlers")





usersRouter.get ("/", getDriverHandler);
usersRouter.get ("/:id", getDriverHandlerId);
usersRouter.post ("/", postDriverHandler);


module.exports = usersRouter;