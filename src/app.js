const express = require("express");

const app = express();

app.get("/user",(req,res) => {
    res.send({firstname: "Subhrajit",lastname:"Mohapatra"});
})

app.post("/user",(req,res) => {
    res.send("Data saved to database successfully");
})

app.delete("/user",(req,res) => {
    res.send("Deleted Successfully");
})

app.use("/test",(req,res) => {
    res.send("hello from the server.");
})

app.listen(1111,() => {
    console.log("on port 1111")
});