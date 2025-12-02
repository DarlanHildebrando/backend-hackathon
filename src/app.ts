import { Express } from "express";
import express from "express";
import cors from "cors";
import userRouter from "./modules/user/user.routes";
import authRouter from "./modules/auth/auth.routes";
import addressRouter from "./modules/address/address.routes";
import roadRouter from "./road/road.routes";

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/adress", addressRouter);
app.use("/roads", roadRouter);

export default app;