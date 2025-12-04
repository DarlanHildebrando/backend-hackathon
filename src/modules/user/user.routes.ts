import { UserController } from "./user.controller.js";
import { Router } from "express";
import { UserService } from "./user.service.js";
import { authenticateToken } from "../auth/auth.middleware.js";
import { AuthService } from "../auth/auth.service.js";

const userRoutes: Router = Router();
const userService: UserService = new UserService();
const authService: AuthService = new AuthService(userService);
const userController: UserController = new UserController(userService, authService);

userRoutes.post("/", userController.postUser.bind(userController));

userRoutes.use(authenticateToken);

userRoutes.get("/:id", userController.getUser.bind(userController));
userRoutes.get("/", userController.getUsers.bind(userController));
userRoutes.put("/:id", userController.putUser.bind(userController));
userRoutes.delete("/:id", userController.deleteUser.bind(userController));

export default userRoutes;