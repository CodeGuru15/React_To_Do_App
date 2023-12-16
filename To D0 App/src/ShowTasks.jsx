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
    <div className="mt-5 grid place-content-center">
      <div className="m-2 text-slate-200 flex text-xl border-white justify-center">
        Task Counter:{" "}
        <p className="font-bold mx-2 text-green-300"> {task.length}</p>
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
