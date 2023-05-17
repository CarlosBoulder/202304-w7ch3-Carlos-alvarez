import { Joi } from "express-validation";
import { type ItemsStructure } from "../../types";

const itemSchema = {
  body: Joi.object<ItemsStructure>({
    name: Joi.string(),
    price: Joi.string(),
    quantity: Joi.string(),
    user: Joi.object({
      $oid: Joi.string(),
    }),
  }),
};

export default itemSchema;
