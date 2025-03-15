import React from "react";

export const Event = (data) => {
  const [values, setValues] = useState({ data });

  const onEdit = (e) => {};

  const onSubmit = (e) => {};

  return (
    <div className="bg-blue-500 rounded-xl m-3 gap-3">
      <div className="flex flex-col">
        <div className="inline-flex">
          <h1>{eventName}</h1>
          <h1>{eventName}</h1>
          <h1>{eventName}</h1>
        </div>
        <p>{eventDesc}</p>
      </div>
      <div>
        <button onSubmit={(e) => onSubmit(e)}>Confirm</button>
        <button>Cancel</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

// this page is for showing the previously created event.
