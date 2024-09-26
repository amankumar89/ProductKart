import path from "path";
import express from "express";

const port = 3001;
const app = express();

import adminRoutes from "./routes/admin.route.js";
import shopRoutes from "./routes/shop.route.js";

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/admin", adminRoutes);
app.use("/", shopRoutes);

app.use((req, res) => {
  res.sendFile(path.join(path.resolve(), "views", "404.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
