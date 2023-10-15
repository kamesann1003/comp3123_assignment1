const { ObjectId } = require("bson")
const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    id: ObjectId,
    firstname: {
        type: String,
        maxlength: 100,
        required: true,
      },
    lastname: {
        type: String,
        maxlength: 50,
        required: true
    },
    email: {
        type: String,
        maxlength: 50,
        unique: true
    },
    gender: {
        type: String,
        maxlength: 25,
        enum: ['Male', 'Female', 'Other']

    },
    salary: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Employees",EmployeeSchema) 
module.exports = Employee;