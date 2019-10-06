const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const path = require("path");
const socketio = require("socket.io");
const http = require("http");

require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT || 3500;
const app = express();
const server = http.Server(app);
const io = socketio(server);
const connectedUser = [];

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-gxk5w.mongodb.net/omnistac9?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

io.on("connection", socket => {
  const { user_id } = socket.handshake.query;
  connectedUser[user_id] = socket.id;
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUser = connectedUser;
  return next();
});
app.use(express.json());
app.use(cors());
app.use(routes);
app.use("/files/", express.static(path.resolve(__dirname, "..", "uploads")));
server.listen(port, () => {
  console.log("server is runing on port " + port);
});
