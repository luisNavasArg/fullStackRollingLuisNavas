const { Router } = require("express");
const router = Router();

router.get("/getProducts", (req, res)=>{
  res.status(200).json({msg:"Realizaste una petición getProducts"})
});
router.get("/getOneProduct/:id", (req, res)=>{
    res.status(200).json({msg:"Realizaste una petición getOneProduct"})
});
router.put("/updateProduct/:id", (req, res)=>{
    res.status(200).json({msg:"Realizaste una petición updateProduct"})
  });
router.post("/createProduct",(req, res)=>{
    res.status(201).json({msg:"Realizaste una petición createProduct"}
)});
router.delete("/deleteProduct/:id", (req, res)=>{
    res.status(200).json({msg:"Realizaste una petición deleteProduct"})
});
router.put("/updateproducts/:id", (req, res)=>{
  res.status(200).json({msg:"Realizaste una petición put"}
)});
router.delete("/deleteproducts/:id", (req, res)=>{
  res.status(200).json({msg:"Realizaste una petición delete"}
)});
module.exports = router;