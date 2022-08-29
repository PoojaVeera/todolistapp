import React from "react";
import { BUTTON1, Input } from "./Styles";
import { useState } from "react";
export const FormInput = ({ createToDoItem }) => {
  const [task1, addedTask1] = useState();
  function handleThe(e) {
    e.preventDefault();
    if (task1 === "") {
      return alert("no input ");
    }
    createToDoItem(task1);
    addedTask1("");
    console.log("add task done");
  }

  return (
    <div>
      <form onSubmit={handleThe}>
        <Input
          type="text"
          placeholder="enter task"
          onChange={(e) => addedTask1(e.target.value)}
          value={task1}
        ></Input>
        <BUTTON1 onClick={handleThe}>Add Task</BUTTON1>
      </form>
    </div>
  );
};
