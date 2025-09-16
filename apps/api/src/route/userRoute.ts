import express from "express";
import validate from "../middleware/validate.js";
import { getUser, saveUser } from "../controller/userController.js";
import { createUserSchema, getUserSchema } from "../utils/validator.js";

const router = express.Router();

router.get("/", validate(getUserSchema, "query"), getUser);
router.post("/", validate(createUserSchema), saveUser);

export default router;
