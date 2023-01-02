import mongoose, { Schema } from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    submissionID: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Rate", "Incomplete", "Complete"],
    },
    userID: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    proposedEffectiveDate: {
      type: String,
    },
    applicant: {
      legalEntityName: {
        type: String,
      },

      website: {
        type: String,
      },

      mailingAddress: {
        address: {
          type: String,
        },
        city: {
          type: String,
        },
        state: {
          type: String,
          enum: [
            "California",
            "Texas",
            "Florida",
            "Alaska",
            "Oregon",
            "Georgia",
          ],
        },
        zip: {
          type: String,
        },
      },
      physicalAddress: {
        address: {
          type: String,
        },
        city: {
          type: String,
        },
        state: {
          type: String,
          enum: [
            "California",
            "Texas",
            "Florida",
            "Alaska",
            "Oregon",
            "Georgia",
          ],
        },
        zip: {
          type: String,
        },
      },
      mailingsameAsPhysical: false,
    },
    contact: {
      firstName: {
        type: String,
      },
      middleName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      email: {
        type: String,
      },
      phones: {
        type: String,
      },
    },
    locationsClassifications: {
      state: {
        type: String,
        enum: ["California", "Texas", "Florida", "Alaska", "Oregon", "Georgia"],
      },
      classCode: {
        type: String,
        enum: ["0042", "0079", "2413", "2585", "2163", "8808"],
      },
      description: {
        type: String,
        enum: [
          "Landscape Gardening",
          "Bush Berry Crops",
          "Bottling",
          "Textiles",
          "Laundries",
          "Clerical Office Employees",
        ],
      },
      payroll: 0,
    },
    premium: {
      type: String,
    },
  },

  { timestamps: true }
);
const Customer = mongoose.model("Customer", customerSchema);
export default Customer;
