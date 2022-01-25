const jwt =require("jsonwebtoken")
const generateToken=(data)=>{
    const token =jwt.sign({data},"scretkey")
    return token
}
const authenticateToken=(req,res,next)=>{
    console.log(req.headers.cookie);
    if (req.headers.cookie){
        const token =req.headers.cookie.split("=")[1]
        const decoded=jwt.verify(token,"scretkey")
        req.usedata=decoded
        next()
    }else{
        req.usedata={massage:"cookie not found"}
        next()
    }
}

module.exports={generateToken,authenticateToken}