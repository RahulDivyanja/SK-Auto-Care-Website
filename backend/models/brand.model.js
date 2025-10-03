import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  logo: { type: String } // store image path, not actual image
});

export default mongoose.model("Brand", brandSchema);
