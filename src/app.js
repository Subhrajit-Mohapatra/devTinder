const express = require("express");

const app = express();

app.use("/hello",(req,res) => {
    res.send("hello hello hello");
})

app.use("/",(req,res) => {
    res.send("The home page.")
})

app.listen(1111,() => {
    console.log("on port 1111")
});