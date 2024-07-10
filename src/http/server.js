const cors = require("cors");
const express = require("express");
const { router } = require("./app/routers");

const server = express();

server.use(cors());
server.use(express.json());
server.use("/api", router);

server.use("/storage", express.static("public/uploads"));

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});