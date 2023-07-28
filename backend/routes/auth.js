const {Router} = require('express');
const router = Router();

router.post("/login",(req,res)=>{
    res.status(200).json({msg:"Petición a auth post"})
});

module.exports = router;