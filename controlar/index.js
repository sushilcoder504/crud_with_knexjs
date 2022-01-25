const knex =require("../config/index")
const bcrypt=require("bcrypt")
// const {generateToken,authenticateToken}=require('../auth/index')

exports.insertdata=(req,res)=>{
    knex('headless').insert({user:req.body.user,title:req.body.title,sidetitle:req.body.sidetitle,color:req.body.color,logo:req.body.logo}).then((data)=>{
        res.send({massage:'data inserted'})
        console.log({massage:'data inserted'})
    }).catch((err)=>{
        res.send({error:err.massage})
    })
}


exports.updatedatabyid=(req, res)=>{
        knex.select("*").from("headless").where('user',req.params.user).update({title:req.body.title,sidetitle:req.body.sidetitle,color:req.body.color,logo:req.body.logo}).then((data)=>{
            res.send({massage:"data update"})
            // console.log(req.params.user) 
        }).catch((err)=>{
            res.send({error:err.massage})      
          })        
}
exports.getAll=(req,res)=>{
    knex.select("*").from("headless").then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send({error:err.massage})
    })
}
exports.getbyid=(req,res)=>{
    knex.select("*").from("headless").where('id',req.params.id).then((data)=>{
        res.send(data)
        // console.log(req.usedata);
    }).catch((err)=>{
        res.send({error:err.massage})
    })
}



exports.deletebyid=(req,res)=>{
    knex.select("*").from("headless").where('id',req.params.id).del().then((data)=>{
        res.send("data delete   ")
    }).catch((err)=>{
        res.send({error:err.massage})
    })
}