import React from "react";
import { redirect } from "react-router-dom";

export const Create = async () => {
  const [values, setValues] = useState({
    id: "",
    name: "",
    date: "",
    desc: "",
    loc: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8081/event", values).then((res) => {
      console.log(res);
      return redirect("/events");
    });
  };
  return (
    <div>
      <h1>Create Event</h1>
      <div className="flex flex-col">
        <input
          onChange={(e) => setValues(...values.name, e.target.value)}
          placeholder="Event Name"
        />
        <input
          placeholder="Event Date"
          onChange={(e) => setValues(...values.date, e.target.value)}
        />
        <input
          placeholder="Event Location"
          onChange={(e) => setValues(...values.loc, e.target.value)}
        />
        <input
          placeholder="Event Description"
          onChange={(e) => setValues(...values.desc, e.target.value)}
        />
      </div>
    </div>
  );
};
