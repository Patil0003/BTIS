import axios from "axios";
import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const base_auth_url = process.env.BASE_AUTH_URL;
const base_sub_url = process.env.BASE_SUBMISSION_URL;

// register
export const userRegister = async (req: Request, res: Response) => {
  try {
    const details = await axios({
      url: `${base_auth_url}/auth/signup`,
      method: "post",
      data: req.body,
    });
    return res.status(200).json({ data: details.data });
  } catch (error: any) {
    return res.status(500).json({ data: error.response.data.message });
  }
};
// login
export const userLogin = async (req: Request, res: Response) => {
  try {
    const details = await axios({
      url: `${base_auth_url}/auth/login`,
      method: "post",
      data: req.body,
    });
    return res.status(200).json({ data: details.data });
  } catch (error: any) {
    return res.status(500).json({ data: error.response.data.message });
  }
};
