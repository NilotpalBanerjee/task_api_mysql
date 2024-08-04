const express = require('express');
const { fetchAllTasks, fetchTaskByID, createTask, updateTaskById, deleteTaskById, deleteTask } = require('../controller/taskController');
const router = express.Router();

router.get('/', fetchAllTasks);
router.get('/:id', fetchTaskByID);
router.post('/', createTask);
router.put('/:id', updateTaskById);
router.delete('/:id', deleteTaskById);
router.patch('/:id', deleteTask);

module.exports = router;
