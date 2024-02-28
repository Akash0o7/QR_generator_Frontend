import express from "express";
import bodyParser from "body-parser";
import qr from "qr-image";
import fs from "fs";
const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("index.ejs");
})
app.post("/submit",(req,res)=>{
    const url=req.body.link;
    var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('public/qr.png'));
res.render("index.ejs");
})

app.listen(3000, ()=>{
    console.log("Server running on port 3000...");
})