import express from "express";
import {
  getFilteredProducts,
  addBrand,
  addCategory,
  addMultipleCategories,
  addProduct,
} from "../controllers/auth.controller.js";
const router = express.Router();

router.get("/brands/:brandName", getFilteredProducts);
router.get("/products", getFilteredProducts); // Optional: Fetch all products if no brand specified
router.post("/brands", addBrand);
router.post("/categories", addCategory);
router.post("/categories/multiple", addMultipleCategories);
router.post("/product", addProduct);

export default router;
