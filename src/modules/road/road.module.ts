import type { IAddress } from "../address/address.module.js";

export interface IRoad {

    id: number;
    name: string;
    address: IAddress[];
    attempt_coins: number;
    created_at: Date;
};

export interface ICreateRoad {

    name: string;
    address: IAddress[];
    attempt_coins: number;
};

export interface IUpdateRoad {

    name?: string;
    address?: IAddress[];
    attempt_coins?: number;
    created_at?: Date;
};