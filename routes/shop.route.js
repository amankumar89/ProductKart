import express from "express";
import adminData from "./admin.route.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("shop", {
    products: adminData.products,
    pageTitle: "My Shop",
    path: "/",
    hasProducts: adminData.products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

export default router;
