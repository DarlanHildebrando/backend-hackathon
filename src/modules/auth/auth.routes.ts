import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { Router } from "express";
import { UserService } from "../user/user.serivce";

const authRouter: Router = Router();
const userService: UserService = new UserService();
const authService: AuthService = new AuthService(userService);
const authController: AuthController = new AuthController(authService);

authRouter.post("/login", authController.login.bind(authController));

export default authRouter;