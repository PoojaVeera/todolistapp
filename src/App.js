import React, { useState } from "react";
import "./App.css";
import { FormInput } from "./components/Input";
import { v4 as uuid } from "uuid";
import { TodoListItem } from "./components/ToDoList";
function App() {
  const [task, setTask] = useState([
    { todo: "eat", complete: false, id: uuid() },
    { todo: "pray", complete: false, id: uuid() },
    { todo: "love", complete: true },
  ]);
  const createToDoItem = (todo) => {
    const newTask = [...task, { todo }];
    setTask(newTask);
  };
  const deleteToDo = () => {
    let deleted = task.filter((taskI) => {
      return !taskI.complete;
    });
    setTask(deleted);
  };

  return (
    <div>
      <h1> ToDoList</h1>
      <FormInput createToDoItem={createToDoItem} />
      {task.map((taskItem, index) => (
        <TodoListItem
          key={uuid()}
          index={index}
          taskItem={taskItem}
          deleteToDo={deleteToDo}
        />
      ))}
    </div>
  );
}
export default App;
