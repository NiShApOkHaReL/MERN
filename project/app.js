// 1. npm init
// 2. npm install express
// 3. npm install nodemon (for automatic start)
// 4. Change in package.json in start like this
//  "scripts": {
//   "start": "nodemon app.js"
// }
//database connection
// npm install mongoose
// ctrl + ? is used to comment out the code



const app = require("express")();
const mongoose = require("mongoose");
const express = require("express")
const { connectDatabase } = require("./database/database");
const Blog = require("./model/blogModel");

//nodejs lai form bata aako data parse gar vandeko ho
app.use(express.json());
app.use(express.urlencoded({extended:true}))

connectDatabase()

//connecting to database



// GET API
app.get("/",(req,res) => {
    res.json({status :200,
        message : "success"})
})

//for inserting html code
// app.get("/", (req,res) => {
//     res.send("")
// })

//array.length = 0(empty)
//array.length != 0
// if we want to fetch length or title from the database then we fetch like this
// array.length = 2
//array[0].title
//array[1].description

// // GET API => /blogs(All)
// Reading 
app.get("/blogs",async (req,res)=>{
    //fetching/reading all alogs from blog model which is done by using find command
    const blogs =await Blog.find() // .find return the data in array form.

    if(blogs.length == 0){
        res.json({
            status : 404,
            message : "Empty blogs"
        })
    }
    res.json({
            status : 200,
            message : "Blog fetched successfully",
            data : blogs

    })

})

// //GET API => /blog/:id (single Blog) , This method gives you the data in array form
app.get("/blogs/:id",async (req,res)=>{
    // console.log(req.params.id)
    const id = req.params.id
    // // const{id} = req.params ALTERNATIVE
    
    // const blog = await Blog.find({_id :id}) // Alternative const blog = await Blog.findById(id)
    // if(blog.length == 0){ // this gives in array form so we check for the length but this is not done when we fetch data as below approach
    //     res.status(404).json({
    //         message : "No blogs found with that id"
    //     })
    // }else {
    
    // res.status(200).json({
    //     message : "Blog fetched successfully",
    //     data : blog
    // })
    // }
    // Alternative of above code for fetching and this method gives you data in object form
    const blog = await Blog.findById(id)
    if(blog){
        res.status(200).json({
            message : "Blog fetched successfully",
            data : blog
        })
    }else{
        res.status(404).json({
            message : "No blog found"
        })
    }
})



// Create BLOG API

app.post("/createBlog",async (req,res)=>{
   const title = req.body.title;
   const subTitle = req.body.subTitle
   const description = req.body.description

   //Alternative(Object destructuring)
   // const{title,subTitle,description} = req.body
   
    console.log(req.body)

    // Insert to database logic goes here 
   await  Blog.create({
        title : title,
        subTitle :subTitle,
        description : description
    })


    res.json({
        status : 201,
        message : "Blog created succesfully"
    })
    // Alternative 
    // res.status(200).json({
    //     message : "Blog created successfully"
    // })
})



     // Alternative 
    // res.status(200).json({
    //     message : "Blog created successfully"
    // })

// UPDATE BLOG API
app.patch("/blogs/:id",async (req,res) => {
    const id = req.params.id
    const title = req.body.title
    const subTitle = req.body.subTitle
    const description = req.body.description
    // const (title, subTitle,description) = req.body

   await  Blog.findByIdAndUpdate(id,{
        title :title,
        subTitle : subTitle,
        description : description

    })
    res.status(200).json({
        message : "Blog updated successfully"
    })

})

    //DELETE BLOG API
    app.delete("/blogs/:id", async(req,res)=>{
        const id = req.params.id
//const {id} =req.params 
        await Blog.findByIdAndDelete(id)

        res.status(200).json({
            message : "Blog deleted successfully"
        })

    })





app.listen(2000,() =>{
    console.log("Node js has started at port 2000")
})