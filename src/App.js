import React, { useRef, useState } from "react";
import "./App.css";
import { Child } from "./components/Child";
import TodoList from "./components/TodoList.js";
import data from "./data.json";
function App() {
  const [toDo, setToDo] = useState(data);
  return (
    <div>
      <center>
        <Child />
        <TodoList todoList={todoList} />
      </center>
    </div>
  );
}
export default App;
