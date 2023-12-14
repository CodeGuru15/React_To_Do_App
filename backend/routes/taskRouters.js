const TaskController = require("../controllers/taskControllers");

const express = require("express");

const router = express.Router();

router.post("/tasks", TaskController.createTask);

router.get("/tasks", TaskController.allTasks);

router.put("/tasks/:id", TaskController.updateTask);

router.delete("/tasks/:id", TaskController.deleteTask);

router.get("/tasks/:id", TaskController.singleTask);

module.exports = router;
