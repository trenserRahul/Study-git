const express = require("express");
const fs = require("fs");
const zlib = require("zlib");
app = express();
app.use(express.json());
const port = 5000;

fs.createReadStream("./test").pipe(
  zlib.createGzip().pipe(fs.createWriteStream("./sample.zip"))
);

app.get("/", (req, res) => {
  const stream = fs.createReadStream("./test", "utf-8");
  stream.on("data", (chunk) => res.write(chunk));
  stream.on("end", () => res.end());
});

app.listen(port, () => {
  console.log("Port is listening");
});
