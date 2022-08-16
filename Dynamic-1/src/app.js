const express = require("express");
const connectToMongo = require("./db/conn");
const app = express();
connectToMongo();
const port = process.env.PORT || 3000;

//routing
app.get("/",(req,res)=>{
    res.send("hi i'm good");
})


app.listen(port,()=>{
    console.log(`Server is running at port no. ${port}`);
})