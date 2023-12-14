import { CiEdit } from "react-icons/ci";

import DeleteTask from "./DeleteTask";

const Task = ({ mytask, myId }) => {
  return (
    <div className="p-1 flex">
      <div className="my-auto">
        <input type="checkbox" className=" m-1" />
      </div>
      <div>
        <p className="p-1 text-slate-600 italic font-semibold">{mytask}</p>
      </div>
      <div className=" my-auto">
        <button className="p-1 text-blue-800">
          <CiEdit />
        </button>
        <DeleteTask myId={myId} />
      </div>
    </div>
  );
};

export default Task;
