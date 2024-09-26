import express from "express";
import path from "path";

const router = express.Router();

router.get("/add-product", (req, res) => {
  res.sendFile(path.join(path.resolve(), "views", "add-product.html"));
});

router.post("/add-product", (req, res) => {
  res.redirect("/");
});

export default router;
