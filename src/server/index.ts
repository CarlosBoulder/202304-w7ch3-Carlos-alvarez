import express from "express";
import morgan from "morgan";
import userRouter from "./routers/users/userRouter.js";
import itemRouter from "./routers/items/itemRouter.js";

const app = express();

app.use(express.json());

app.disable("x-powered-by");

app.use(morgan("dev"));

app.use("/user", userRouter);

app.use("/items", itemRouter);

export default app;
