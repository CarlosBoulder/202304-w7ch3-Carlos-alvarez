import { type NextFunction, type Request, type Response } from "express";
import Item from "../../../database/models/Item.js";

export const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await Item.find().exec();

    res.status(200).json({ items });
  } catch (error: unknown) {
    next(error);
  }
};
