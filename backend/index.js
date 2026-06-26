import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import { Employee } from "./models/employee.js"



mongoose.connect("mongodb://localhost:27017/EMS")
.then(()=>{console.log("Mongo db connected succesfully")})
.catch((error)=>{console.log("connection failed")})



const server= express();
server.use(express.json());
server.use(cors({origin:"http://localhost:5173"}))


server.listen(5000,()=>{console.log("server started at port 5000")});
server.post("/AddEmp",async(req,res)=>{
    try{
        const {Name,Age,Designation,Salary}=req.body
        console.log(Name,Age,Designation,Salary)
        const exists=await Employee.findOne({name:Name})
        if(exists){
            return res.status(400).json({message:"Employee already registered"});
        
        }
        const newemp=new Employee({
            name:Name,
            age:Age,
            designation:Designation,
            salary:Salary,

        })
    await newemp.save();
    return res.status(200).json({message:"registered succesfully"});
    }
    catch(e){
        console.log(e)
        return res.status(500).json({message:"server error"})
    }
})
server.get("/getEmp",async(req,res)=>{
    try{
        const allemployee=await Employee.find()
            return res.status(200).json({message:"get succesfull",Employees:allemployee});

    }
    catch(e)
    {
        console.log(e)
                return res.status(500).json({message:"server error"})

    }
})
server.get("/getEmpDetails/:id",async(req,res)=>{
    try{
        // const allemployee=await Employee.find()
        // return res.status(200).json({message:"get emp details succesfully",Employee:allemployee});
        const id=req.params.id
        // console.log("hit",id);
        const details=await Employee.findById(id)
        return res.status(200).json({message:"success",details})
    }
    catch(e){
console.log(e)
        return res.status(500).json({message:"server error"})


    }
})
server.put("/saveEmployeeDetails/:id",async(req,res)=>{
    try{
        console.log(req.params.id)
        console.log(req.body)
                const{Name,Age,Designation,Salary}=req.body
        const id=req.params.id
        if(!id||!Name||!Age||!Designation||!Salary){
            return res.status(400).json({message:"req fields not found"})
        }

        const update=await Employee.findByIdAndUpdate(id,{name:Name,
            age:Age,designation:Designation,salary:Salary
        }
        )
        return res.status(200).json({message:"successfully updated"})
    }
    catch(e){
        console.log(e)
        return res.status(500).json({message:"server error"})

    }
})
server.delete("/deleteEmpDetails/:id",async(req,res)=>
{
    try{
        const id=req.params.id
        console.log(id);
        const deleteEmpDetails=await Employee.findByIdAndDelete(id)
        return res.status(200).json({message:"succesfully deleted"})
    }
    catch{
        console.log(e)
        return res.status(500).json({message:"server error"})
    }
})