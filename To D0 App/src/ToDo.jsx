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
    <div className="grid place-content-center">
      <h2 className="py-2 text-center my-1 text-2xl font-semibold text-purple-200 tracking-widest">
        To Do List
      </h2>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor=""></label>
          <input
            onChange={handleChange}
            value={data.title || ""}
            type="text"
            className="p-1 rounded-sm"
          />
          <button
            type="submit"
            className="mx-2 my-1 py-1 px-2 bg-blue-400 hover:text-white rounded-lg"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default ToDo;
