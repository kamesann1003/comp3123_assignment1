const express = require("express")
const Employees = require('../models/Employee')
const routes = express.Router()

// GET employee list
routes.get('/employees', async (req,res) => {
    try{
        const empList = await Employees.find({})   

        res.status(200).json({
            "status": true,
            "emp": empList
        })
    }catch(error){
        res.status(500).json({
            "status": false,
            "message": "Failed to get list of Employees",
            "Error:": error
        })
    }
})


// ADD new employee
routes.post('/employees', async (req, res) => {
    try {
        const newEmp = new Employees({
            ...req.body          
        });
        await newEmp.save();

        res.status(201).json({
            "status": true,
            "message": "Successfully added new Employee!"
        });
    } catch (error) {
        res.status(500).json({
            "status": false,
            "message": "Failed to add a new Employee",
            "Error": error
        });
    }
});


// GET employee's detail by id
routes.get('/employees/:eid', async (req,res) => {

    try{

        const empID = req.params.eid; 
        const employee = await Employees.findById(empID);  
    
        res.status(200).json({ 
            "status": true,
            "Employee detail:": employee
        });
    }catch(error){
        res.status(500).json({
            "status": false,
            "message": "Failed to get Employee's detail",
            "Error:": error
        })
    }
})



// UPDATE employees details
routes.put('/employees/:eid', async (req,res) => {
    try{

        const empID = req.params.eid;
        const modifiedData = req.body;

        await Employees.findByIdAndUpdate(empID, modifiedData)     

        res.status(200).json({
            "status": true,
            "message": "Successfully updated Employee's data!",
        })
    }catch(error){
        res.status(500).json({
            "status": false,
            "message": "Failed to update Employee's data",
            "Error:": error
        })
    }
})



// DELETE employee by id
routes.delete('/employees', async (req, res) => {
    try {
        const empID = req.query.eid;

        const emp = await Employees.findByIdAndDelete(empID);

        if (!emp) {
            return res.status(404).json({
                "status": false,
                "message": "Employee not found!"
            });
        } else {
            return res.status(204).json({
                "status": true,
                "message": "Successfully deleted Employee!"
            });
        }
    } catch (error) {
        return res.status(500).json({
            "status": false,
            "message": "Failed to delete Employee",
            "Error": error
        });
    }
})

       

module.exports = routes