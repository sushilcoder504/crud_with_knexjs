require("dotenv").config()
const express=require("express")
const app=express()
const home =require("./routes/index")
const port=process.env.port
const cors = require('cors');

app.use(cors());


app.use(express.json())
app.use("/",home)
app.get("/",(req,res)=>{
    res.send("server connecting")
})
app.listen(port,()=>{
    console.log(`server connecting port No ${port}`);
})

