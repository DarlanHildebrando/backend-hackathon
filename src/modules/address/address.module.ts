export type category = "TRILHA" | "PRAIA" | "LARICA"

export interface IAddress {

    id: number;
    name: string;
    category: category;
};

export interface ICreateAddress {

    name: string;
    image_url: string;
    category: category;
};

export interface IUpdateAddress {

    name?: string;
    category: category;
};