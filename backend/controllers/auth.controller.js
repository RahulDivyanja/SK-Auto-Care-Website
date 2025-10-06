import Product from "../models/product.model.js";
import Brand from "../models/brand.model.js";
import Category from "../models/category.model.js";

// Add brand
export const addBrand = async (req, res) => {
  try {
    const { name, logo } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Brand name is required" });
    }
    const newBrand = new Brand({ name, logo });
    await newBrand.save();
    res.status(201).json(newBrand);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add single category
export const addCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name) {
      return res.status(400).json({ message: " Category name is required" });
    }
    const newCategory = new Category({ name, description });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add multiple categories
export const addMultipleCategories = async (req, res) => {
  try {
    const { categories } = req.body;

    if (!Array.isArray(categories) || categories.length === 0) {
      return res
        .status(400)
        .json({ message: "At least one category is required" });
    }

    // Check for missing names
    const invalid = categories.find((cat) => !cat.name);
    if (invalid) {
      return res
        .status(400)
        .json({ message: "Each category must have a name" });
    }

    // Insert all categories at once
    const newCategories = await Category.insertMany(categories);

    res.status(201).json(newCategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addProduct = async (req, res) => {
  try {
    const { name, brand, category, price, description, stock, images } =
      req.body;

    if (!name || !brand || !category || !price) {
      return res
        .status(400)
        .json({ message: "Name, brand, category, and price are required" });
    }
    const newProduct = new Product({
      name,
      brand,
      category,
      price,
      description,
      stock,
      images,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get products by brand with optional search and category filter
export const getFilteredProducts = async (req, res) => {
  try {
    const brandName = req.query.brand || req.params.brandName || undefined;
    const { q, category } = req.query;
    const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
    const limit = Math.max(parseInt(req.query.limit, 10) || 20, 1);
    const skip = (page - 1) * limit;

    // brand lookup (robust)
    let brand = null;
    if (brandName) {
      const normalized = String(brandName).trim();
      brand = await Brand.findOne({
        $or: [
          { slug: normalized.toLowerCase() },
          { name: new RegExp(`^${normalized.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i") },
        ],
      });
      if (!brand) return res.status(404).json({ message: "Brand not found" });
    }

    const conditions = {};
    if (brand) conditions.brand = brand._id;
    if (q) {
      const safe = String(q).trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      conditions.name = new RegExp(safe, "i");
    }
    if (category) {
      const cat = await Category.findOne({ name: new RegExp(`^${String(category).trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i") });
      if (cat) conditions.category = cat._id;
    }

    const total = await Product.countDocuments(conditions);
    const products = await Product.find(conditions)
      .populate("brand category")
      .skip(skip)
      .limit(limit)
      .exec();

    const pages = Math.ceil(total / limit) || 1;
    res.json({ products, total, page, pages });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};