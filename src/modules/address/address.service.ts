import prisma from "../../prisma/client";
import { ICreateAddress, IUpdateAddress, IAddress } from "./address.module";

export class AddressService {

    async getAllAddress(): Promise<IAddress[]> {

        return prisma.address.findMany();
    };

    async getAddress(id: number): Promise<IAddress | null> {

        return prisma.address.findUnique({ where: { id } });
    };

    async postAddress(data: ICreateAddress): Promise<IAddress> {

        return prisma.address.create({ data });
    };

    async updateAddress(id: number, data: IUpdateAddress): Promise<IAddress> {

        return prisma.address.update({ where: { id }, data: data });
    };

    async deleteAddress(id: number): Promise<void> {

        return prisma.address.delete({ where: id });
    };
};