import { useState } from "react";
import axios from "axios";

const ToDo = () => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const task = e.target.value;
    setData({ title: task });
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
      <h2 className="py-1 my-1 text-2xl font-semibold text-purple-500">
        Welcome to To Do List
      </h2>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor=""></label>
          <input
            onChange={handleChange}
            value={data.title || ""}
            type="text"
            className="border p-1"
          />
          <button
            type="submit"
            className="m-1 py-1 px-2 bg-blue-500 hover:text-white rounded-lg"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default ToDo;
