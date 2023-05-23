const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const userRoutes = Router();

const usersController = new UsersController();
usersRoutes.post("/", usersController.create);

module.exports = usersRoutes;