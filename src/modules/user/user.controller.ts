import type { ICreateUser, IUpdateUser, IUser } from "./user.module.js";
import { UserService } from "./user.service.js";
import type { Request, Response } from "express";
import { updateUserSchema, userSchema } from "./user.zod.js";
import bcrypt from "bcrypt";
import type { AuthService } from "../auth/auth.service.js";

export class UserController {

    private userService: UserService;
    private authService: AuthService;

    constructor(userService: UserService, authService: AuthService) {

        this.authService = authService;
        this.userService = userService;
    };

    async getUsers(req: Request, res: Response): Promise<Response> {

        try {

            const data: IUser[] = await this.userService.getUsers();
            return res.status(200).json(data);

        } catch (error: any) {

            return res.status(500).json({ message: error.message });
        };
    };

    async getUser(req: Request, res: Response): Promise<Response> {

        try {

            const { id } = req.params;

            if (!id) {

                return res.status(404).json({ message: "Id not received" });
            };

            const data: IUser | null = await this.userService.getUser(Number(id));
            return res.status(200).json(data);

        } catch (error: any) {

            return res.status(500).json({ message: error.message });
        };
    };

    async postUser(req: Request, res: Response): Promise<Response> {

        try {

            const user: ICreateUser = req.body;
            const validatedUser = userSchema.parse(user);
            const hashPassword = await bcrypt.hash(user.password, 10);
            const existingUser = await this.userService.getUserByEmail(user.email);

            if (!validatedUser) {

                return res.status(404).json({ message: "Object structure not valid to sign" });
            };

            if (existingUser) {

                return res.status(409).json({ message: "Email already signed" });
            };

            const newUser: ICreateUser = { ...user, password: hashPassword };
            const data: IUser = await this.userService.createUser(newUser);
            return res.status(201).json(data);

        } catch (error: any) {

            return res.status(500).json({ message: error.message });
        };
    };

    async putUser(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const data: IUpdateUser = req.body;

            updateUserSchema.parse(data);

            if (!id) {
                return res.status(404).json({ message: "Id not received" });
            }

            if (data.password) {

                const hashPassword = await bcrypt.hash(data.password, 10);
                const safeUpdateUser = { ...data, password: hashPassword }
                await this.userService.updateUser(Number(id), safeUpdateUser);
            } else {

                await this.userService.updateUser(Number(id), data);
            };

            const updatedUser = await this.userService.getLoggedUser(Number(id));

            if (!updatedUser) {
                return res.status(404).json({ message: "User not found" });
            };

            const { password, ...sanitizedUser } = updatedUser;
            const token = this.authService.generateToken(sanitizedUser);

            return res.status(200).json({ token });

        } catch (error: any) {

            return res.status(500).json({ message: error.message });
        };
    };

    async deleteUser(req: Request, res: Response): Promise<Response> {

        try {

            const { id } = req.params;

            if (!id) {

                return res.status(404).json({ message: "Id not received" });
            };

            await this.userService.deleteUser(Number(id));
            return res.status(200).json({ message: "User deleted with sucess" });

        } catch (error: any) {

            return res.status(500).json({ message: error.message });
        };
    };
};