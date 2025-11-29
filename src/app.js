const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./model/user");

app.use(express.json());
app.post("/signup", async (req,res) => {
    const user = new User(req.body);
    try{
    await user.save();
    res.send("user added successfully");
    }
    catch{
        res.status(404).send("error");
    }
})

connectDB().then(() => {
    console.log("Database is connected>>>>");
    app.listen(9999, () => {
        console.log("Server is listen at port 9999....");
    })
})
    .catch((err) => {
        console.log("Error connect to database");
    })



//mongodb+srv://subhrajit:vTTnXxfuPLDdVeAd@nodejs.tz9nmkh.mongodb.net/