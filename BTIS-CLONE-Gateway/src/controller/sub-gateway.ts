import axios from "axios";
import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const base_sub_url = process.env.BASE_SUBMISSION_URL;

// add-applicant
export const postApplicant = async (req: Request, res: Response) => {
  try {
    const urlData = await axios({
      url: `${base_sub_url}/customer-submission/applicant-form`,
      method: "post",
      data: req.body,
    });
    return res.status(200).json({ data: urlData.data });
  } catch (error: any) {
    return res.status(500).json({ data: error.response.data.message });
  }
};
// get-data
export const getAllList = async (req: Request, res: Response) => {
  try {
    const urlData = await axios({
      url: `${base_sub_url}/customer-submission/get-list`,
      method: "get",
      data: req.body,
    });
    return res.status(200).json({ data: urlData.data });
  } catch (error: any) {
    return res.status(500).json({ data: error.response.data.message });
  }
};
// delete
export const deleteCust = async (req: Request, res: Response) => {
  try {
    const urlData = await axios({
      url: `${base_sub_url}/customer-submission/delete-cust`,
      method: "put",
      data: req.body,
    });
    return res.status(200).json({ data: urlData.data });
  } catch (error: any) {
    return res.status(500).json({ data: error.response.data.message });
  }
};
