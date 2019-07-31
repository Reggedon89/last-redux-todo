import React, { useState } from "react";
import MaterialIcon from "material-icons-react";
import TodoItem from "./TodoItem";
import {
  addTodo,
  setFilter,
  clearCompleted,
  markAll
} from "../actions/todo.action";
import { useSelector } from "react-redux";

export default props => {
  const [todo, setTodo] = useState("");
  const filter = useSelector(appState => appState.filter);
  const count = useSelector(
    appState => appState.todos.filter(todo => !todo.checked).length
  );
  const allTodosCount = useSelector(appState => appState.todos.length);
  const todos = useSelector(appState => {
    const filter = appState.filter;

    switch (filter) {
      case "active":
        return appState.todos.filter(todo => !todo.checked);
      case "completed":
        return appState.todos.filter(todo => todo.checked);
      default:
        return appState.todos;
    }
  });

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input">
        <MaterialIcon onClick={markAll} icon="keyboard_arrow_down" />
        <input
          type="text"
          placeholder="What needs to be done?"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
      </div>
      <ul className="items">
        {todos.map(todo => (
          <TodoItem
            key={"todo" + todo.id}
            id={todo.id}
            value={todo.value}
            checked={todo.checked}
          />
        ))}
      </ul>
      {allTodosCount > 0 ? (
        <footer>
          <p>{count} items left</p>
          <div>
            <button
              className={filter === "all" ? "active" : ""}
              onClick={e => setFilter("all")}
              type="button"
            >
              All
            </button>
            <button
              className={filter === "active" ? "active" : ""}
              onClick={e => setFilter("active")}
              type="button"
            >
              Active
            </button>
            <button
              className={filter === "completed" ? "active" : ""}
              onClick={e => setFilter("completed")}
              type="button"
            >
              Completed
            </button>
          </div>
          <button onClick={clearCompleted} type="button">
            Clear completed
          </button>
        </footer>
      ) : (
        ""
      )}
      <button style={{ display: "none" }} type="submit">
        Submit
      </button>
    </form>
  );
};
