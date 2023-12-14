const Clock = () => {
  const newDate = new Date();
  const Day = newDate.getDate();
  const Month = newDate.getMonth();
  const Year = newDate.getFullYear();

  return (
    <div>
      <div className="flex text-2xl justify-center m-1 text-teal-600">
        <p>{Day}-</p>
        <p>{Month}-</p>
        <p>{Year}</p>
      </div>
    </div>
  );
};

export default Clock;
