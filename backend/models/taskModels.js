const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: { type: String, required: true },
  status: { type: Boolean, required: true },
});

const TaskModel = mongoose.model("task", taskSchema);

module.exports = TaskModel;
