import { Request, Response } from "express";
import Customer from "../model/submission";
import mongoose from "mongoose";
//gghghghgjhghj
// post-physical-and-mailing-address
export const applicantForm = async (req: Request, res: Response) => {
  try {
    const {
      submissionID,
      status,
      userID,
      proposedEffectiveDate,
      applicant,
      contact,
      locationsClassifications,
      premium,
    } = req.body;
    const addData = new Customer({
      submissionID,
      status,
      userID,
      proposedEffectiveDate,
      applicant,
      contact,
      locationsClassifications,
      premium,
    });
    //generating-submission-id
    const submissionNo = Customer.find();
    var starting = "QNX";
    let newInt = 0;
    submissionNo.count(async (err, starting_id: any) => {
      addData["submissionID"] = starting + 10101010100 + starting_id;
      const response = await addData.save();
      if (response) {
        return res.status(200).json({
          message: "Applicant Form Added Successsfully",
          result: response,
        });
      } else {
        return res.status(404).json({
          message: "Applicant Form Not added.",
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: "No Result Found",
    });
  }
};
//put-business-form
export const updateForm = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    let jsondata: any = {};
    if (req.body.submissionID) {
      jsondata.submissionId = req.body.submissionId;
    }
    if (req.body.status) {
      jsondata.status = req.body.status;
    }
    if (req.body.userID) {
      jsondata.userId = req.body.userId;
    }
    if (req.body.proposedEffectiveDate) {
      jsondata.proposedEffectiveDate = req.body.proposedEffectiveDate;
    }
    if (req.body.applicant) {
      jsondata.applicant = req.body.applicant;
    }
    if (req.body.contact) {
      jsondata.contact = req.body.contact;
    }
    if (req.body.locationsClassifications) {
      jsondata.locationsClassifications = req.body.locationClassifications;
    }
    if (req.body.premium) {
      jsondata.premium = req.body.locationClassifications;
    }
    Customer.updateOne(
      { _id: new mongoose.Types.ObjectId(id) },
      { $set: jsondata },
      { new: true },
      (err, result) => {
        if (err) {
          return res.status(404).json({
            message: "Please Check Something not working.",
          });
        } else {
          return res.status(200).json({
            message: "Update Form Successfully",
            result: result,
          });
        }
      }
    );
  } catch (error) {
    return res.status(500).json({
      message: "No Result Found",
      result: error,
    });
  }
};
// get
export const getData = async (req: Request, res: Response) => {
  try {
    const result = await Customer.find();
    if (result) {
      return res.status(200).json({
        message: "Getting list",
        result: result,
      });
    } else {
      return res.status(404).json({
        message: "Please Check Something not working.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "No Result Found",
      result: error,
    });
  }
};
// get-data-by-id
export const getDataByid = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    console.log(_id);

    const result = await Customer.findOne({
      id: new mongoose.Types.ObjectId(_id),
    });
    console.log(result);

    if (result) {
      return res.status(200).json({
        message: "Getting Data",
        result: result,
      });
    } else {
      return res.status(404).json({
        message: "Please Check Something not working.",
        result: result
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "No Result Found",
      result: error,
    });
  }
}
// delete
export const delCust = async (req: Request, res: Response) => {
  try {
    const result = await Customer.deleteOne({
      _id: new mongoose.Types.ObjectId(req.body._id),
    });
    if (result)
      if (!result) {
        return res.status(400).json({
          message: " Not Deleted",
        });
      } else {
        return res.status(200).json({
          message: "Deleted successfully",
          result: result,
        });
      }
  } catch (e) {
    return res.status(404).json({ data: e });
  }
};
