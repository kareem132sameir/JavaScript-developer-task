const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const cors = require("cors");
const wordsRoutes = require("./routes/wordsRoutes");
const rankRoutes = require("./routes/rankRoutes");

app.use(cors());
app.options("*", cors());

//////////////MiddleWares////////////////
app.use(express.json());
app.use(express.urlencoded());

//////////////Routes////////////////
app.use("/words", wordsRoutes);
app.use("/rank", rankRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
