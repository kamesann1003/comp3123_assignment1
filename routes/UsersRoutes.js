const express = require("express")
const Users = require("../models/Users");
const routes = express.Router()
routes.post('/', (req, res) => {
    res.send("<h1>hello</h1>")
})

// Create new account
routes.post('/signup', async (req, res) => {

    try{

        const newUser = new Users({
            ...req.body                   
        });
        await newUser.save();
        res.status(201).json({
            "status": true,
            "message": "Successfully created new User!"
        });

    }catch(error){
        res.status(500).json({
            "status": false,
            "message": 'Error creating new User',
            "Error:": error
        })
    }

})

// User login
routes.post('/login', async (req,res) => {

  
        const {username, password} = req.body;

        const user = await Users.findOne({username});    
        
        if (!user || password !== user.password){
            return res.status(401).json({
                "status": false,
                "message": "Invalid Username and password",
                password,
                user
            });
        }

        res.status(200).json({
            "status": true,
            "username": user.username,
        });


})


module.exports = routes



