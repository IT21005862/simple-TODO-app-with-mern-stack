const express= require("express");
const mongoose= require("mongoose");
const bodypaser= require("body-parser");
const cors= require("cors");
const dotenv=require("dotenv");
const app= express();
require("dotenv").config();

const port= process.env.PORT || 8070;
app.use(cors());
app.use(bodypaser.json());

const url= process.env.MONGO_URL;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const TodoRouter = require("./routes/todos.js");
app.use("/todo", TodoRouter);

app.listen(port, () => {
    console.log(`Server is up and running on port number: ${port}`);
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection success!");
});