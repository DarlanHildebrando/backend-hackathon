export interface IRoad {

    id: number;
    days: number;
    attempt_coins: number;
    created_at: Date;
};

export interface ICreateRoad {

    days: number;
    attempt_coins: number;
};

export interface IUpdateRoad {

    days?: number;
    attempt_coins?: number;
    created_at?: Date;
};