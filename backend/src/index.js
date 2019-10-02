const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const path = require("path");

require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT || 3500;
const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-gxk5w.mongodb.net/omnistac9?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.use(express.json());
app.use(cors());
app.use(routes);
app.use("/files/", express.static(path.resolve(__dirname, "..", "uploads")));
app.listen(port, () => {
  console.log("server is runing on port " + port);
});
