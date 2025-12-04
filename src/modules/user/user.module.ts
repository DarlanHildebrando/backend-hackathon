import type { IRoad } from "../road/road.module.js";

export interface IUser {

    id: number;
    name: string;
    email: string;
    current_coins: number;
    created_at: Date;
    password: string;
};

export interface ILoggedUser {

    id: number;
    name: string;
    email: string;
    password: string;
    current_coins: number;
    created_at: Date;
    roads: IRoad[];
};

export type ILoggedUserToken = Omit<ILoggedUser, "password">;

export interface ICreateUser {

    name: string;
    email: string;
    password: string;
};

export interface IUpdateUser {

    name?: string;
    email?: string;
    password?: string;
}