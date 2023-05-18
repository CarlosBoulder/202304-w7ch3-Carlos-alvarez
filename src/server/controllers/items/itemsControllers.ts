import { type NextFunction, type Response } from "express";
import Item from "../../../database/models/Item.js";
import { type ItemRequest } from "../../../types.js";

export const listItems = async (
  req: ItemRequest,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req;
  try {
    const items = await Item.find({ user: userId }).exec();
    res.status(200).json({ items });
  } catch (error: unknown) {
    next(error);
  }
};
