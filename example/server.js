const express = require("express");
const cors = require("cors");
const schema = require( "./config/schema.json");
const bodyParser = require("body-parser")
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/config", (req,res)=> {
  res.json(schema)
}).post("/post", (req,res)=> {
  console.log("post=",req.body)
  res.send("ok")
})

app.listen(3030, () => {
  console.log("start")
})
