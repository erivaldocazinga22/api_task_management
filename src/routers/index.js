const express = require("express");
const router = express.Router();
const db = require("../http/core/models")

router.get("/", (request, response) => {
    response.send("Hello world")
});

module.exports = { router };