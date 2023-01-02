import express from "express";
import { registration, userLogin } from "../controller/user";

const router = express.Router();

router.post("/signup", registration);
router.post("/login", userLogin);


export default router;
