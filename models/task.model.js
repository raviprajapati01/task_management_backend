import mongoose from "mongoose";

export const taskSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"pending"
    }
},{timestemp: true});

const Task = mongoose.model("Task", taskSchema);
export default Task;

