var express = require("express");
var router = express.Router();

router.get("200-ok", function(req,res,next){
    console.log(res)
})

module.exports=router;