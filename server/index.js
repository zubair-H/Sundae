import express from "express";
import path from "path";

const BUILD = path.resolve("../client/build/");
const PORT = 3000;

const app = express();

app.use(express.static(BUILD));

app.listen(PORT, () => {
  console.log(`Sundae listening on ${PORT}`);
});
