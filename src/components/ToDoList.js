import React from "react";
import { v4 as uuid } from "uuid";

export const TodoListItem = ({ taskItem, index, deleteToDo }) => {
  return (
    <li keys={uuid()}>
      {taskItem.todo} &nbsp; &nbsp;
      <button onClick={() => deleteToDo(index)}>del</button>
    </li>
  );
};
