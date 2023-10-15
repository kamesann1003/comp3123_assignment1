const { ObjectId } = require('bson')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id: ObjectId,  
    username: {
        type: String,
        maxlength: 100,
        required: true,
        unique: true,
      },
    email: {
        type: String,
        maxlength: 50,
        unique: true,
        required: true
    },
    password: {
        type: String,
        maxlength: 50,
        required: true
    }
})


const Users = mongoose.model("Users", UserSchema)

module.exports = Users;