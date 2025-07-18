const ProductCategory = require("../../models/product-category.model"); //database
const systemConfig = require("../../config/system");
const createTreeHelper = require("../../helpers/createTree")

// [GET] /
module.exports.index = async (req, res) => {
  let find = {
    deleted: false,
  };

  const productCategory = await ProductCategory.find(find);

  const newProductCategory = createTreeHelper.tree(productCategory);
  // vì biến này cần dùng lại nhiều nên ta phải tạo middlewares để tái sử dụng nó

  res.render("client/pages/home/index", {
    pageTitle: "Trang chủ",
  });
};