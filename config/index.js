require("dotenv").config()
const knex=require("knex")({
    client:"mysql",
    connection:{
        host:process.env.host,
        user:process.env.user,
        database:process.env.database,
        password:process.env.password
    }
})

knex.schema.createTable("headless",(table)=>{
    table.increments("id").primary()
    table.string("title")
    table.string("color")
    table.string("logo")
    table.string("sidetitle")
    table.string("user")
}).then((data)=>{
    console.log({massage:"table create"});
}).catch((err)=>{
    console.log({massage:"table already created"});
})

module.exports=knex
