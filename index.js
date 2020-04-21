const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");
const userRouter = require("./api/userRouter");
require("dotenv").config();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use("/api", userRouter);

server.listen(process.env.PORT || 5000, () => {
  console.log("listening on port 5000");
});
