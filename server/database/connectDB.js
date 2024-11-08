import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  return mongoose
    .connect(url)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
