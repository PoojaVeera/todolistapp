import React from "react";
import { v4 as uuid } from "uuid";
import { DELBUTTON, LIST } from "./Styles";

export const TodoListItem = ({ taskItem, id, deleteTask }) => {
  console.log("data received");
  console.log(uuid);
  return (
    <LIST key={uuid()}>
      {taskItem.todo} &nbsp; &nbsp;
      <DELBUTTON onClick={() => deleteTask(id)}>Del</DELBUTTON>
    </LIST>
  );
};
