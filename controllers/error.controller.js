export default function getError(_req, res) {
  res.render("404", {
    products: [],
    pageTitle: "Page Not Found",
    path: "/404",
  });
}
