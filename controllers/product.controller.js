import Product from "../models/product.model.js";

export const getAddProduct = (req, res) => {
  Product.fetchAll((products) => {
    return res.render("add-product", {
      products,
      pageTitle: "Add Product",
      path: "/admin/add-product",
    });
  });
};

export const getProducts = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  return res.redirect("/");
};

export const getAllProducts = (req, res) => {
  Product.fetchAll((products) => {
    return res.render("shop", {
      products,
      pageTitle: "My Shop",
      path: "/",
    });
  });
};
