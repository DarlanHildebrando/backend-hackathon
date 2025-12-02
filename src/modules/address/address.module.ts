export enum category {

    TRILHA = "TRILHA",
    PRAIA = "PRAIA",
    LARICA = "LARICA"
};

export interface IAddress {

    id: number;
    name: string;
    category: category;
};

export interface ICreateAddress {

    name: string;
    category: category;
};

export interface IUpdateAddress {

    name?: string;
    category: category;
};