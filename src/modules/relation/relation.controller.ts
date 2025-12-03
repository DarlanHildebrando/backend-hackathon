import type { IRelation, ICreateRelation, IUpdateRelation } from "./relation.module.js";
import { RelationService } from "./relation.service.js";
import type { Request, Response } from "express";
import { relationSchema, updateRelationSchema } from "./relation.zod.js";

export class RelationController {

    private relationService: RelationService;

    constructor(relationService: RelationService) {

        this.relationService = relationService;
    };

    async getRelations(req: Request, res: Response): Promise<Response> {

        try {

            const data: IRelation[] = await this.relationService.getRelations();
            return res.status(200).json(data);

        } catch (error: any) {

            return res.status(500).json({ message: error.message });
        };
    };

    async getRelation(req: Request, res: Response): Promise<Response> {

        try {

            const { id } = req.params;

            if (!id) {

                return res.status(404).json({ message: "Id not found" });
            };

            const road: IRelation | null = await this.relationService.getRelation(Number(id));
            return res.status(200).json(road);

        } catch (error: any) {

            return res.status(500).json({ message: error.message });
        };
    };

    async postRelation(req: Request, res: Response): Promise<Response> {

        try {

            const data: ICreateRelation = req.body;
            const validatedRoad = relationSchema.parse(data);

            if (!validatedRoad) {

                return res.status(401).json({ message: "Object format not valid" });
            };

            const road: IRelation = await this.relationService.createRelation(data);
            return res.status(201).json(road);

        } catch (error: any) {

            return res.status(500).json({ message: error.message });
        };
    };

    async putRelation(req: Request, res: Response): Promise<Response> {

        try {

            const { id } = req.params;
            const data: IUpdateRelation = req.body;

            if (!id) {

                return res.status(404).json({ message: "Id not found" });
            };

            const validatedRoad = updateRelationSchema.parse(data);

            if (!validatedRoad) {

                return res.status(401).json({ message: "Object format no valid to update" });
            };

            const road: IRelation = await this.relationService.updateRelation(Number(id), data);
            return res.status(200).json(road);

        } catch (error: any) {

            return res.status(500).json({ message: error.message });
        };
    };

    async deleteRelation(req: Request, res: Response): Promise<Response> {

        try {

            const { id } = req.params;

            if (!id) {

                return res.status(404).json({ message: "Id not found" });
            };

            await this.relationService.deleteRelation(Number(id));
            return res.status(200).json({ message: "Relation deleted with sucess" });

        } catch (error: any) {

            return res.status(500).json({ message: error.message });
        };
    };
};