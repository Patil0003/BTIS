import { Request, Response } from "express";
import User from "../model/user";
import Client from "../model/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { encryptData } from "../middleware/encryptData";
// register
export const registration = async (req: Request, res: Response) => {
  try {
    const {
      firstName,
      middleName,
      lastName,
      username,
      password,
      email,
      phone,
    } = req.body;

    const user = await User.findOne({ username });
    if (user) {
      return res.status(404).json({
        message: "Already Registered",
      });
    }
    const userSignup = new User({
      firstName,
      middleName,
      lastName,
      email,
      username,
      password: bcrypt.hashSync(req.body.password, 6),
      phone,
    });

    const userRes = await userSignup.save();

    const clientSignup = new Client({
      userId: userRes._id,
      username: encryptData(req.body.username),
        password: encryptData(req.body.password),
      });
    const clientRes = await clientSignup.save();

    const response = userRes || clientRes;

    if (response) {
      return res.status(200).json({
        message: "Registered Successfully",
        result: response,
      });
    } else {
      return res.status(404).json({
        message: "Something went wrong Re-Try",
      });
    }
  } catch (error) {
    console.log("error:-", error);
    return res.status(500).json({
      message: "No Result Found",
      result: error,
    });
  }
};
// login
export const userLogin = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      res.status(404).json({ message: "User not Exist" });
    } else {
      const isValid = bcrypt.compareSync(password, <string>user?.password);
      if (isValid) {
        let payload = { username };

        jwt.sign(
          payload,
          "SECRET_KEY",
          {
            expiresIn: "1h",
          },
          (err, token) => {
            res.status(200).json({
              Token: token,
              message: "Login Successfully",
              result: user,
            });
          }
        );
      } else {
        res.status(404).json({
          message: "Password is incorrect",
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      message: "No Result Found",
      result: error,
    });
  }
};
