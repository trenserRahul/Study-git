//files index.js and index.html

const express = require ('express')
// import express from "express";
const app = express();
const path = require('path')
// import path from "path";
// const __dirname = path.resolve;
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile (path.join(__dirname,'index.html'));
});

app.get("/download", (req, res) => {
//   res.sendFile (path.join(__dirname,'index.html'));
    res.download(path.join(__dirname,'public/images/test-image.png'))
});

app.listen(port, () => {
  console.log(`The port is listening to port ${port}`);
});
