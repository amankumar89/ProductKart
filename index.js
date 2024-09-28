import express from "express";

const port = 3001;
const app = express();

import adminRoutes from "./routes/admin.route.js";
import shopRoutes from "./routes/shop.route.js";

import errorController from "./controllers/error.controller.js";

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/admin", adminRoutes);
app.use("/", shopRoutes);

app.use("", errorController);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
