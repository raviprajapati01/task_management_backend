import { Router } from "express";

import { createTask,getTasks,fetchTaskById, updateTask, deleteTask} from "../controllers/task.controller.js";

const router = Router();

router.post('/create', createTask);

router.get('/fatch_tasks', getTasks);
router.get('/fatch_task/:id', fetchTaskById);
router.put('/update/:id', updateTask);
router.delete('/delete/:id', deleteTask);



export default router;