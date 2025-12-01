import { ICreateUser, IUpdateUser, IUser } from "./user.module";
import prisma from "../../prisma/client";

export class UserService {


    async getUsers(): Promise<IUser[]> {

        return prisma.users.findMany();
    };

    async getUser(id: number): Promise<IUser | null> {

        return prisma.users.findUnique({ where: { id } });
    };

    async createUser(data: ICreateUser): Promise<IUser> {

        return prisma.users.create({data});
    };

    async updateUser(id: number, data: IUpdateUser): Promise<IUser> {

        return prisma.users.update({ where: { id }, data });
    };

    async deleteUser(id: number): Promise<void> {

        prisma.users.delete({ where: { id } });
    };
};