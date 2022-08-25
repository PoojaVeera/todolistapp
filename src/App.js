import React, { useState } from "react";
import "./App.css";
import { FormInput } from "./components/Input";
function App() {
  const [task, setTask] = useState(["eat", "pray", "love"]);
  const createToDoItem = (todo) => {
    const newTask = [...task, { todo }];
    setTask(newTask);
  };

  return (
    <div>
      <FormInput createToDoItem={createToDoItem} />
    </div>
  );
}
export default App;
