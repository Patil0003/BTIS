import express from "express";
import {
  applicantForm,
  updateForm,
  getData,
  delCust,
  getDataByid,
} from "../controller/submission";

const router = express.Router();

router.post("/applicant-form", applicantForm);
router.put("/update-form/:id", updateForm);
router.get("/get-list", getData);
router.get("/get-dataBy-id/:_id", getDataByid);
router.put("/delete-cust", delCust);

export default router;
