const express = require('express');

const addProductsController = require('../controllers/add-products');


const router = express.Router();

router.get("/add-products", addProductsController.getAddProducts);
router.post("/add-products", addProductsController.postAddProducts);

module.exports = router;