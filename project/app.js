// 1. npm init
// 2. npm install express
// 3. npm install nodemon (for automatic start)
// 4. Change in package.json in start like this
//  "scripts": {
//   "start": "nodemon app.js"
// }
//database connection
// npm install mongoose




const app = require("express")();
const mongoose = require("mongoose");
const { connectDatabase } = require("./database/database");

connectDatabase()

//connecting to database



// GET API
app.get("/",(req,res) => {
    res.json({status :200,
        message : "success"})
})

app.listen(2000,() =>{
    console.log("Node js has started at port")
})