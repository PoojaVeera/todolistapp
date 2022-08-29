import React from "react";
import { v4 as uuid } from "uuid";

export const TodoListItem = ({ taskItem, id, deleteTask }) => {
  console.log("data received");
  console.log(uuid);
  return (
    <li key={uuid()}>
      {taskItem.todo} &nbsp; &nbsp;
      <button onClick={() => deleteTask(id)}>del</button>
    </li>
  );
};
