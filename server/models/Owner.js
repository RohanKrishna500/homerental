import mongoose from "mongoose";

const OwnerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  properties: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property'
  }]
});

export default mongoose.model("Owner", OwnerSchema);
