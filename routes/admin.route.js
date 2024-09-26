import express from "express";

const router = express.Router();

const products = [];

router.get("/add-product", (req, res) => {
  res.render("add-product", {
    products,
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true,
  });
});

router.post("/add-product", (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

export default {
  routes: router,
  products,
};
