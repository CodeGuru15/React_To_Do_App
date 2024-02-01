import { useState } from "react";
import axios from "axios";

const ToDo = () => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const task = e.target.value;
    task.length > 25
      ? alert("Max 15 character")
      : setData({ title: task, status: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:1000/tasks", data);
      setData({});
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="grid gap-3 place-content-center">
      <h2 className="my-1 text-2xl font-semibold tracking-wider text-center text-purple-200">
        To Do List
      </h2>

      <form onSubmit={handleSubmit} className="flex justify-end gap-3">
        <div>
          <label htmlFor=""></label>
          <input
            onChange={handleChange}
            value={data.title || ""}
            type="text"
            className="p-1 rounded-sm"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-8 h-8 text-xl text-center text-white bg-blue-400 rounded-full hover:text-white"
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default ToDo;
