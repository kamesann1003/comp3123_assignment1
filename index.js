const mongoose = require("mongoose")
const express = require('express')
const SERVER_PORT = 8080
var app = express()
const usersRoute = require("./routes/UsersRoutes")
const employeeRoute = require("./routes/EmployeeRoutes")
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const DB_CONNECTION_STRING = "mongodb+srv://alilou:qL6N6DFpCvmozLSX@cluster0.6yuv7vd.mongodb.net/comp3123_assignment1?retryWrites=true&w=majority"

mongoose.connect(DB_CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use("/api/v1/user", usersRoute)
app.use("/api/v1/emp", employeeRoute)



app.listen(SERVER_PORT, () =>{
    console.log(`server running at http://locathost:${SERVER_PORT}/`)
})