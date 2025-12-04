import jwt from "jsonwebtoken";
import type { ILoggedUser, ILoggedUserToken } from "../user/user.module.js";
import { UserService } from "../user/user.service.js";
import bcrypt from "bcrypt";

export class AuthService {

    private userService: UserService;

    constructor(userService: UserService) {

        this.userService = userService;
    };

    generateToken(user: ILoggedUserToken): string {
        const JWT_SECRET = process.env.JWT_SECRET || "";
        return jwt.sign(user, JWT_SECRET, { expiresIn: "1h" });
    }


    async authenticate(email: string, password: string): Promise<string | null> {

        const JWT_SECRET: string = process.env.JWT_SECRET || "";
        const user: ILoggedUser | null = await this.userService.getUserByEmail(email);

        if (!user) {

            return null;
        };

        const passwordValidation = await bcrypt.compare(password, user.password);

        if (!passwordValidation) {

            return null;
        };

        const token = jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });
        return token;
    };
};