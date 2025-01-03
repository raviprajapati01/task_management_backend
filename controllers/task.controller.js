import Task from "../models/task.model.js";

const createTask = async (req, res) => {
    try {
        // fetch task from req.body
        const { title, description, status } = req.body;
        //validation
        if (!title || !description || !status) {
            return res.status(400).json({ message: "Please fill all fields" });
        }
        // create a new task
        const task = new Task({
            title,
            description,
            status
        });
        // save task to database
        await task.save();
        res.status(201).json({ message: "Task created successfully" });
    } catch (error) {
        //send respomse
        res.status(500).json({
            message: "Error creating task",
            error: error.message
        });
    }
}

// fetch all task
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        //validation
        if (tasks.length == 0) {
            return res.status(404).json({ message: "No tasks found" });
        }

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching tasks",
            error: error.message
        });
    }
}

// fatch task by id
// fetch all task
const fetchTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id); // Find task by ID
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching task', error });
    }
}

// put task
const updateTask = async (req, res) =>{
    const { id } = req.params;
    const { title, description, status} = req.body;
    try{
        const updated_task = await Task.findByIdAndUpdate(id, { title, description, status}, { new: true });
        if (!updated_task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(updated_task);
    }catch(error){
        res.status(500).json({ message: 'Error updating task', error });
    }
}

// delet task
const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted_task = await Task.findByIdAndDelete(id);
        if (!deleted_task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    }catch(error){
        res.status(500).json({ message: 'Error deleting task', error });
    }
}


export {
    createTask,
    getTasks,
    fetchTaskById,
    updateTask,
    deleteTask
}