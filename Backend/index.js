import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql2 from "mysql2";
import multer from "multer";
import fs from "fs";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const conn=mysql2.createConnection({
  host:"127.0.0.1",
  user:"root",
  password:"Anil@12345",
  database:"codemapcommunity",
  port:3306,
});

var storage = multer.diskStorage({
  destination: function (req,file,cb){
    var dir = "./uploads";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null,dir);
  },
});

var upload = multer({ storage: storage});

app.post("/fileUpload/img1", (req,res) => {
  const img1 = req.file.img1;
  const img2 = req.file.img2;
  const img3 = req.file.img3;
  
  const sql="INSERT INTO blog(img1,img2,img3) VALUES(?,?,?);";
  conn.query(sql,[img1,img2,img3],(err,data)=>{
    if(err) console.log(err);
    else{
      return res.status(200).send({status: 200});
    }
  })
});

app.get("/fileUpload", (req, res) => {
  const sql = "SELECT * FROM blogs;";
  conn.query(sql, (err,data)=>{
    if(err) console.log(err);
    else{
      return res.json(data);
    }
  });
  });


app.post("/blog", (req, res) => {
  const author = req.body.author;
  const topic = req.body.topic;
  const title = req.body.title;
  const id = req.body.id;
  const sql="INSERT INTO blogs(author,topic,title,id,img1,img2,img3,body) VALUES(?,?,?,?,?,?,?,?);";
  conn.query(sql,[author,topic,title,id],(err,data)=>{
    if(err) console.log(err);
    else{
      return res.status(200).send({status: 200});
    }
  })
});

app.get("/blog", (req, res) => {
  const sql = "SELECT * FROM blogs;";
  conn.query(sql, (err,data)=>{
    if(err) console.log(err);
    else{
      return res.json(data);
    }
  });

  

  app.delete("/blog/delete/:id",(req,res)=> {
    const id = req.query.id;
    const sql = `DELETE FROM blogs WHERE id = '${id}'`;
    conn.query(sql, (err, data) => {
      if(err) console.log(err);
      else {
        return res.status(200).send({ status: 200 });
      }
    });
  });
  
});
app.get("/", (req, res) => {
  const myDetails = {
    name: "Aritra",
    age: 23,
  };
  
  res.send(myDetails);
});
app.listen(8000, (req, res) => {
  console.log("Backend Connected");
});

