import { UserController } from "./user.controller";
import { Router } from "express";
import { UserService } from "./user.serivce";

const userRoutes: Router = Router();
const userService: UserService = new UserService();
const userController: UserController = new UserController(userService);

userRoutes.get("/:id", userController.getUser.bind(userController));
userRoutes.get("/", userController.getUsers.bind(userController));
userRoutes.post("/", userController.postUser.bind(userController));
userRoutes.put("/:id", userController.putUser.bind(userController));
userRoutes.delete("/:id", userController.deleteUser.bind(userController));

export default userRoutes;