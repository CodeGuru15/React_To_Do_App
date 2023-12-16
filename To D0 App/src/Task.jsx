import axios from "axios";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditButton";

const Task = ({ mytask, myId, myStatus }) => {
  const handleChange = () => {
    myStatus = !myStatus;

    const updateData = { status: myStatus };
    try {
      axios.put(`http://localhost:1000/tasks/${myId}`, updateData);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-1 flex">
      <div className="my-auto">
        <input
          type="checkbox"
          className="m-1"
          onChange={handleChange}
          checked={myStatus}
        />
      </div>
      <div>
        {myStatus ? (
          <p className="p-1 text-green-300 tracking-wider italic font-semibold">
            {mytask}
          </p>
        ) : (
          <p className="p-1 text-slate-200 tracking-wider italic font-semibold">
            {mytask}
          </p>
        )}
      </div>
      <div className="flex my-auto">
        <EditTask taskId={myId} />
        <DeleteTask myId={myId} />
      </div>
    </div>
  );
};

export default Task;
