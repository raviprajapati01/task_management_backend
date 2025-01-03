import express from 'express';
const app = express();

import dbConnection from './db_config/dbConnection.js';
import taskRouters from './routes/task.routes.js';

import dotenv from 'dotenv'
dotenv.config();

const port = 4000;

const data = [{
    "Name": "Ravi Prajapati",
    "Target": 'Complite Assessment',
    "Assessment Type": "Backend Development Task",
    "Assessment Date": "03/01/2025",
    "Assessment Status": "Completed"
}]

dbConnection();

//middlware
app.use(express.json());

// Task createion routes
app.use('/api/v1/tasks', taskRouters);

app.get('/', (req, res)=>{
    res.json(data);
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})