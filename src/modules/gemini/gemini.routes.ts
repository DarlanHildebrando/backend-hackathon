import { GeminiController } from "./gemini.controller.js";
import { GeminiService } from "./gemini.service.js";
import { Router } from "express";

const geminiRouter: Router = Router();
const geminiService: GeminiService = new GeminiService();
const geminiController: GeminiController = new GeminiController(geminiService);

geminiRouter.post("/generate", geminiController.generate.bind(geminiController));

export default geminiRouter;