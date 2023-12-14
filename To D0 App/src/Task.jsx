import DeleteTask from "./DeleteTask";
import EditTask from "./EditButton";

const Task = ({ mytask, myId }) => {
  return (
    <div className="p-1 flex">
      <div className="my-auto">
        <input type="checkbox" className=" m-1" />
      </div>
      <div>
        <p className="p-1 text-slate-600 italic font-semibold">{mytask}</p>
      </div>
      <div className="flex my-auto">
        <EditTask taskId={myId} />
        <DeleteTask myId={myId} />
      </div>
    </div>
  );
};

export default Task;
