import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import axios from "axios";

const EditTask = ({ taskId }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [updatedTask, setUpdatedtask] = useState({});

  const handleChange = (e) => {
    const updateData = e.target.value;
    setUpdatedtask({ title: updateData, status: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isClicked == true) {
      try {
        axios.put(`http://localhost:1000/tasks/${taskId}`, updatedTask);
      } catch (error) {
        alert(error.message);
      }
    }
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className=" flex">
        <label htmlFor=""></label>
        {isClicked == true ? (
          <section className="p-1">
            <input
              type="text"
              onChange={handleChange}
              className=" bg-slate-700 border-b text-white"
              value={updatedTask.title || ""}
            />
          </section>
        ) : (
          ""
        )}
        <button type="submit" className="p-1 text-white hover:text-green-500">
          <CiEdit />
        </button>
      </form>
    </div>
  );
};

export default EditTask;
