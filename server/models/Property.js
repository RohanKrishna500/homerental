import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
  title: String,
  address: String,
  price: Number,
  description: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Owner'
  },
  tenant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tenant',
    default: null
  },
  isRented: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model("Property", PropertySchema);
