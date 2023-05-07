import { Router } from "express";
import { UsersController } from "../controllers";

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.get("/list", usersController.list);
usersRoutes.get("/show/:id", usersController.show);
usersRoutes.post("/create", usersController.create);
usersRoutes.put("/update/:id", usersController.update);
usersRoutes.delete("/delete/:id", usersController.delete);

export { usersRoutes };
