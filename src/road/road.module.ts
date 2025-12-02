export interface IRoad {

    id: number;
    days: number;
    attempted_coins: number;
    created_at: Date;
};

export interface ICreateRoad {

    days: number;
    attempted_coins: number;
};

export interface IUpdateRoad {

    days?: number;
    attempted_coins?: number;
    created_at?: Date;
};