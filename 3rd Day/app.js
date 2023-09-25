const app = require("express")()

// Alternative
//const express = require("express")
//const app = express()

//Functions are arrow and regular function

app.get("/",(req,res)=>{
    //console.log(req)
    //res.send("<h1>Hello I am from home page</h1>")

    res.json({
        Nisha:"I am from home page....."
    })
})
app.get("/contact",(req,res)=>{
    res.send("I am from contact page.")
})

app.get("/contact",(req,res)=>{
    res.send("I am from contact page")
})

app.listen(4000,(req,res)=>{
    console.log("Nodejs has started at port ")
})




