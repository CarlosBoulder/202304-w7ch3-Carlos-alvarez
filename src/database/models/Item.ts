import { Schema, model } from "mongoose";

const itemSchema = new Schema({
  name: String,
  price: String,
  quantity: String,
  user: {
    $oid: String,
  },
});

const Item = model("Item", itemSchema, "items");

export default Item;
