const express = require("express");
const cors = require("cors");
require("dotenv").config();

const server = express();

server.use(cors());
server.use("/api", function(request, response) {
    response.send("Hello word - API Task Management")
});

const PORT = process.env.PORT | 3333;

server.listen(PORT, function() {
    console.log(`Server running in port ${PORT}`);
})