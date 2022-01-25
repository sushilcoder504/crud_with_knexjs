const express=require("express")
// const { authenticateToken}=require('../auth/index')
const {insertdata, updatedatabyid,getAll,getbyid,deletebyid,getbyname}=require('../controlar/index')
const router=express.Router()

router.post("/inserdata",insertdata)
// router.post('/login',logindata)
router.put("/update/:user",updatedatabyid)
router.get("/getAll",getAll)
router.get("/get/:id",getbyid)
// router.get("/get/:name",getbyname)

router.delete("/delete/:id",deletebyid)
module.exports=router