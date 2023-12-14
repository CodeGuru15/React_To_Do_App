const TaskModel = require("../models/taskModels");

exports.createTask = async (req, res) => {
  try {
    const { title } = req.body;

    let newTask = new TaskModel({
      title,
    });

    newTask = await newTask.save();

    res.status(200).json(newTask);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.allTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find({});
    res.status(200).json(tasks);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { title } = req.body;
    const taskId = req.params.id;

    // update product
    let updatedTask = new TaskModel({
      title,
      _id: taskId,
    });

    updatedTask = await TaskModel.findByIdAndUpdate(taskId, updatedTask);

    res.status(200).json({
      message: `Task with id ${taskId} is updated successfully`,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const deleteId = req.params.id;
    const deleteTask = await TaskModel.findByIdAndDelete(deleteId);

    res.status(200).json(`Task with id ${deleteId} is deleted successfully`);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.singleTask = async (req, res) => {
  try {
    const getId = req.params.id;
    const getTask = await TaskModel.findById(getId);

    res.status(200).json(getTask);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
