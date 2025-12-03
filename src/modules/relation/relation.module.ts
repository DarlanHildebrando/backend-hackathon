export interface IRelation {
    
    id: number;
    userId: number;
    addressId: number;
    roadId: number;
};

export interface ICreateRelation {
    
    userId: number;
    addressId: number;
    roadId: number;
};

export interface IUpdateRelation {
    
    userId: number;
    addressId: number;
    roadId: number;
};