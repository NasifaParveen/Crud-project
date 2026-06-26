import mongoose, { Schema } from "mongoose";

const employeeSchema= new Schema({
name:{
    type:String,
    required:true,
},
age:{
    type:Number,
    required:true,
},
designation:{
    type:String,
    required:true,
},
salary:{
    type:String,
    required:true,
},

},
{
timestamps:true
})

const Employee= mongoose.model("Employee",employeeSchema);
export{Employee}