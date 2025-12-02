export interface IRelation {

    id: number;
    user_id: number;
    address_id: number;
    road_id: number;
};

export interface ICreateRelation {

    user_id: number;
    address_id: number;
    road_id: number;
};

export interface IUpdateRelation {

    user_id?: number;
    address_id?: number;
    road_id?: number;
};