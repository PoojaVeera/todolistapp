import React, { useState } from "react";
import "./App.css";
import { FormInput } from "./components/Input";
import { v4 as uuid } from "uuid";
import { TodoListItem } from "./components/ToDoList";
import { BUTTON2 } from "./components/Styles";
function App() {
  const [task, setTask] = useState([
    { todo: "eat", complete: false, id: uuid },
    { todo: "pray", complete: false, id: uuid },
    { todo: "love", complete: true, id: uuid },
  ]);
  const createToDoItem = (todo) => {
    const newTask = [...task, { todo }];
    setTask(newTask);
  };
  const deleteTask = (id) => {
    const delTask = [...task];
    delTask.splice(id, 1);
    setTask(delTask);
    console.log("task deleted");
  };
  const deleteCompleted = () => {
    let deleted = task.filter((taskI) => {
      return !taskI.complete;
    });
    setTask(deleted);
    console.log("delete");
  };

  return (
    <center>
      <div>
        <h1> ToDoList</h1>
        <FormInput createToDoItem={createToDoItem} />

        {task.map((taskItem, id) => (
          <TodoListItem
            key={uuid}
            index={id}
            taskItem={taskItem}
            deleteCompleted={deleteCompleted}
            deleteTask={deleteTask}
          />
        ))}
        <BUTTON2 onClick={deleteCompleted}>Delete Completed Tasks</BUTTON2>
      </div>
    </center>
  );
}
export default App;
