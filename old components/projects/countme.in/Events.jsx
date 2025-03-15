import React from "react";
import useFetch from "./functions/useFetch";

export const Events = (data) => {
  const ListData = () => {
    return (
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Description</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {data.map((event, index) => {
                return (
                  <tr key={index}>
                    <td>{event.id}</td>
                    <td>{event.name}</td>
                    <td>{event.date}</td>
                    <td>{event.time}</td>
                    <td>{event.desc}</td>
                    <td>{event.loc}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const { data, loading, error } = useFetch(url);

  return { ...(loading ? "Loading..." : <></>) };
};

// this component is for showing full list of events
