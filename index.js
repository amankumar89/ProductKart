import express from "express";
import { engine } from "express-handlebars";

const port = 3001;
const app = express();

import adminRoutes from "./routes/admin.route.js";
import shopRoutes from "./routes/shop.route.js";

app.engine(
  "hbs",
  engine({
    extname: "hbs",
    defaultLayout: "main-layout",
    layoutsDir: "views/layouts",
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/admin", adminRoutes.routes);
app.use("/", shopRoutes);

app.use((req, res) => {
  res.render("404", {
    products: [],
    pageTitle: "Page Not Found",
    path: "/404",
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
