import { Router } from "express";
import { validate } from "express-validation";
import itemSchema from "../../../utils/schemas/itemSchema.js";
import { list } from "../../controllers/items/itemsControllers.js";

const itemRouter = Router();

itemRouter.get("/list", validate(itemSchema, {}, { abortEarly: false }), list);

export default itemRouter;
