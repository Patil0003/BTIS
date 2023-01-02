import express from "express";
import { postApplicant, getAllList,deleteCust } from "../controller/sub-gateway";

const router = express.Router();
router.post("/add-applicant", postApplicant);
router.get("/get-list", getAllList);
router.put("/delete-cust", deleteCust);
export default router;
