const { Router } = require("express");
const router = Router();

router.get("/getUsers", (req, res)=>{
  res.status(200).json({msg:"Realizaste una petición getUsers"})
});
router.get("/getOneUser/:id", (req, res)=>{
    res.status(200).json({msg:"Realizaste una petición getOneUser"})
});
router.put("/updateUser/:id", (req, res)=>{
    res.status(200).json({msg:"Realizaste una petición updateUser"})
  });
router.post("/createUser",(req, res)=>{
    res.status(201).json({msg:"Realizaste una petición createUser"}
)});
router.delete("/deleteUser/:id", (req, res)=>{
    res.status(200).json({msg:"Realizaste una petición deleteUser"})
});
router.put("/updateUsers/:id", (req, res)=>{
  res.status(200).json({msg:"Realizaste una petición put"}
)});

module.exports = router;