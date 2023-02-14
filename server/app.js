const express = require("express");
const cors = require("cors");
const logRoutes = require("./middleware/logger");

const postRouter = require('./routers/post');
const app = express();

app.use(cors());
app.use(express.json());
app.use(logRoutes);

app.get("/", (req, res) => {
    res.json({
        welcome: "Welcome to the Florin Community API"
    })
})

app.use("/forum", postRouter);

module.exports = app;
