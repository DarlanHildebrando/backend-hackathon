export interface IRoad {

    id: number;
    name: string;
    attempt_coins: number;
    check: boolean;
    created_at: Date;
};

export interface ICreateRoad {

    name: string;
    check: boolean;
    attempt_coins: number;
};

export interface IUpdateRoad {

    name?: string;
    check?: boolean;
    attempt_coins?: number;
    created_at?: Date;
};