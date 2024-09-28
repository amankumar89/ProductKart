import fs from "fs";
import path from "path";

const currPath = path.join(path.resolve(), "data", "products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(currPath, (err, contents) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(contents));
  });
};

export default class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(currPath, JSON.stringify(products), (err) => {
        if (err) console.log("failed to save data", err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}
