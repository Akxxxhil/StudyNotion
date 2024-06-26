const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require('cors');

const PORT = process.env.PORT || 4000;
const database = require("./config/db");
database();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

const profileRouter = require("./router/user");
app.use("/app/v1/user", profileRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Everything is perfect");
});
