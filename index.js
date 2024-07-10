const express = require("express");
const cors = require("cors");
const { router } = require("./src/routers");

const server = express();
server.use(express.json());
server.use(cors());
server.use("/api", router);

const { PORT = 5173 } = process.env;

server.listen(PORT, () => {
    console.log(`Server running in ${PORT}`);
});