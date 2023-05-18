import { Router } from "express";
import { validate } from "express-validation";
import loginSchema from "../../../utils/schemas/loginSchema.js";
import {
  login,
  registerUser,
} from "../../controllers/users/userControllers.js";

const userRouter = Router();

userRouter.post(
  "/login",
  validate(loginSchema, {}, { abortEarly: false }),
  login
);

userRouter.post("/register", registerUser);

export default userRouter;
