import express from "express";
import {
  getAddProduct,
  getProducts,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/add-product", getAddProduct);

router.post("/add-product", getProducts);

export default router;
