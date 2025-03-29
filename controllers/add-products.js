const getAddProducts = (req, res, next) => {
  res.render("admin/add-products");
};

const postAddProducts = (req, res, next) => {
  res.redirect("/");
};

module.exports = { getAddProducts, postAddProducts };
