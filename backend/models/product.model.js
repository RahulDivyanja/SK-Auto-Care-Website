import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },         
  brand: { type: mongoose.Schema.Types.ObjectId, ref: "Brand" }, 
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }, 
  price: { type: Number, required: true },
  description: { type: String },
  stock: { type: Number, default: 0 },
  images: [{ type: String }],  // store image URLs / paths
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Product", productSchema);
 