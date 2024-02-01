import { useState, useEffect } from "react";
import axios from "axios";
import Task from "./Task";

const fetchTasks = async () => {
  try {
    const res = await axios.get("http://localhost:1000/tasks");
    const data = res.data;
    return data;
  } catch (e) {
    alert(e.message);
  }
};

const ShowTasks = () => {
  const [task, setTask] = useState([]);

  const getTask = async () => {
    const taskData = await fetchTasks();
    setTask(taskData);
  };

  useEffect(() => {
    getTask();
  }, [task]);

  return (
    <div className="grid mt-5 place-content-center">
      <div className="flex justify-center m-2 text-xl border-white text-slate-200">
        Task Counter:{" "}
        <p className="mx-2 font-bold text-green-300"> {task.length}</p>
      </div>
      {task.map((item) => {
        return (
          <div>
            <Task mytask={item.title} myId={item._id} myStatus={item.status} />
          </div>
        );
      })}
    </div>
  );
};

export default ShowTasks;
