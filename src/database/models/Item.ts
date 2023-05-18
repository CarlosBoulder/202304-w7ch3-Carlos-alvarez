import { Schema, Types, model } from "mongoose";
import User from "./User.js";

const itemSchema = new Schema({
  name: String,
  price: String,
  quantity: String,
  user: {
    type: Types.ObjectId,
    ref: User,
    required: true,
  },
});

const Item = model("Item", itemSchema, "items");

export default Item;
