import React, { useRef } from "react";
import { BUTTON1, Input } from "./Styles";
import { useState } from "react";
export const Child = () => {
  const [task, addedTask] = useState();
  let refInput = useRef(null);
  function handleThe() {
    console.log(refInput.current.value);
    addedTask(refInput.current.value);
  }

  return (
    <div>
      <form>
        <Input
          type="text"
          ref={refInput}
          placeholder="Enter task to add"
          autoComplete="off"
        ></Input>
        <BUTTON1 onClick={handleThe}>add task</BUTTON1>
      </form>
      <p>
        THE TASKS:<br></br>
        {task}
      </p>
    </div>
  );
};
