const express = require("express");
const app = express();


app.get("/",function(req,res){
    res.send("Homepage")
})


const port = process.env.port || 3000;
app.listen(port)