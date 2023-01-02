import express from "express";
import { userRegister, userLogin } from "../controller/user-gateway";

const router = express.Router();
router.post("/signup", userRegister);
router.post("/login", userLogin);

export default router;
