import axios from "axios";

import { RiDeleteBin6Line } from "react-icons/ri";

const DeleteTask = ({ myId }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:1000/tasks/${myId}`);
      // console.log(`http://localhost:1000/tasks/${myId}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <button onClick={handleDelete} className="p-1 text-red-500">
      <RiDeleteBin6Line />
    </button>
  );
};

export default DeleteTask;
