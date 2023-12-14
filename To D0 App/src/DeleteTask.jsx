import axios from "axios";
import { useState } from "react";

import { RiDeleteBin6Line } from "react-icons/ri";

const DeleteTask = ({ myId }) => {
  const [confirm, setConfirm] = useState(false);

  const handleToggle = () => {
    setConfirm(!confirm);
  };

  const handleDelete = () => {
    try {
      axios.delete(`http://localhost:1000/tasks/${myId}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      {confirm == true ? (
        <section className="absolute flex bg-blue-300 px-1 text-center">
          <p className="p-1">Delete ?</p>
          <button className=" p-1 hover:text-white" onClick={handleDelete}>
            Ok
          </button>
          <button className=" p-1 hover:text-white" onClick={handleToggle}>
            Cancel
          </button>
        </section>
      ) : (
        <button onClick={handleToggle} className="p-1 text-red-500">
          <RiDeleteBin6Line />
        </button>
      )}
    </div>
  );
};

export default DeleteTask;
