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

app.get("/user", async (req,res) => {
    const userEmail = req.body.emailId;
    try{
    const user = await User.find({emailId : userEmail});
    if(user.length === 0){
        res.send("no user found")
    }
    else{
        res.send(user);
    }
    }
    catch(err) {
        res.status(404).send("something went wrong");
    }
})

app.delete("/user", async (req,res) => {
    const userId = req.body.userId;
    try{
        const user = await User.findByIdAndDelete(userId);
        res.send("user Deleted successfully");
    }
    catch(err){
        res.status(400).send("something went wrong");
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