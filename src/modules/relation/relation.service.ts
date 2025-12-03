import type { IRelation, ICreateRelation, IUpdateRelation } from "./relation.module.js";
import prisma from "../../prisma/client.js";


export class RelationService {

    async getRelations(): Promise<IRelation[]> {

        return prisma.relation.findMany();
    };

    async getRelation(id: number): Promise<IRelation | null> {

        return prisma.relation.findUnique({ where: { id } });
    };

    async createRelation(data: ICreateRelation): Promise<IRelation> {

        return prisma.relation.create({ data });
    };

    async updateRelation(id: number, data: IUpdateRelation): Promise<IRelation> {

        return prisma.relation.update({ where: { id }, data });
    };

    async deleteRelation(id: number): Promise<void> {

        prisma.relation.delete({ where: { id } });
    };
};