const mongoose = require("mongoose")

exports.connectDatabase = async() => {
    //connecting to database
    await mongoose.connect("mongodb+srv://Nisha_Pokharel:Nisha_Pokharel@cluster0.ogtadj1.mongodb.net/?retryWrites=true&w=majority")
    console.log("Database connected successfully")

}