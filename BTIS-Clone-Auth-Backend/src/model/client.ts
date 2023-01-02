import mongoose, { Schema } from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    username: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);
const Client = mongoose.model("Client", clientSchema);
export default Client;
