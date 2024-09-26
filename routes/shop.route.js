import express from "express";
import adminData from "./admin.route.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("shop", {
    products: adminData.products,
    pageTitle: "My Shop",
    path: "/",
  });
});

export default router;
