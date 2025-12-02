import prisma from "../prisma/client";
import { ICreateRoad, IRoad, IUpdateRoad } from "./road.module";

export class RoadService {

    async getRoads(): Promise<IRoad[]> {

        return prisma.roads.findMany();
    };

    async getRoad(id: number): Promise<IRoad> {

        return prisma.roads.findUnique({ where: { id } });
    };

    async postRoad(data: ICreateRoad): Promise<IRoad> {

        return prisma.roads.create({ data });
    };

    async putRoad(id: number, data: IUpdateRoad): Promise<IRoad> {

        return prisma.roads.update({ where: { id }, data: { data } });
    };

    async deleteRoad(id: number): Promise<void> {

        prisma.roads.delete({ where: { id } });
    };
};