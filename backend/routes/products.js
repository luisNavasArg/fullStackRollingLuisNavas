const { Router } = require("express");
const router = Router();
const productController = require('../controllers/productController')
router.get("/getProducts", productController.index);//read
router.get("/getOneProduct/:id", productController.getOne);//listo
router.put("/updateProduct/:id",productController.update);//listo
router.post("/createProduct",productController.create);//listo
router.delete("/deleteProduct/:id",productController.del);//listo
router.get("/searchProduct",productController.search);

module.exports = router;