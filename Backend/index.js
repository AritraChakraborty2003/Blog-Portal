import express from "express";

const app = express();

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
