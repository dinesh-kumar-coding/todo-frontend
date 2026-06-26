import "./App.css";
import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {

  const API_URL = import.meta.env.VITE_API_URL;

  const [todos, setTodos] = useState([]);

  async function handleAdd(input) {
    try {
      const response = await fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });
      const newTodo = await response.json();
      setTodos((prev) => [...prev, newTodo]);
    } catch (err) {
      console.log("Error adding todos: ", err);
    }
  }

  async function handleDelete(idToRemove) {
    try {
      const response = await fetch(
        `${API_URL}/todos/${idToRemove}`,
        {
          method: "DELETE",
        },
      );
      setTodos((prev) => prev.filter((todo) => todo._id !== idToRemove));
    } catch (err) {
      console.log("Error deleting todo item: ", err);
    }
  }

  async function handleToggle(idToToggle) {
    try {
      const todo = todos.find((t)=> t._id === idToToggle);
      const response = await fetch(
        `${API_URL}/todos/${idToToggle}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            completed: !todo.completed,
          }),
        },
      );
      const updated = await response.json();
      setTodos((prev)=>
        prev.map((todo) =>
          todo._id === idToToggle
            ? updated
            : todo,
        ),
      );
    } catch (err) {
      console.error("Error toggling: ", err);
    }
  }

  function moveTodoUp(id) {
    const index = todos.findIndex((element) => element._id === id);
    if (index > 0) {
      const updatedTodos = [...todos];
      [updatedTodos[index], updatedTodos[index - 1]] = [
        updatedTodos[index - 1],
        updatedTodos[index],
      ];
      setTodos(updatedTodos);
    }
  }

  function moveTodoDown(id) {
    const index = todos.findIndex((todo) => todo._id === id);
    if (index < todos.length - 1) {
      const updatedTodos = [...todos];
      [updatedTodos[index], updatedTodos[index + 1]] = [
        updatedTodos[index + 1],
        updatedTodos[index],
      ];
      setTodos(updatedTodos);
    }
  }

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch(`${API_URL}/todos`);
        const data = await response.json();
        setTodos(data);
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    }
    fetchTodos();
  }, []);

  return (
    <>
      <h1>TODO APP</h1>
      <TodoForm onAdd={handleAdd}></TodoForm>

      <TodoList
        onToggle={handleToggle}
        onDelete={handleDelete}
        onMoveDown={moveTodoDown}
        onMoveUp={moveTodoUp}
        todos={todos}
      ></TodoList>

      {todos.length !== 0 && (
        <p className="remaining">
          {todos.filter((todo) => !todo.completed).length} tasks remaining
        </p>
      )}
    </>
  );
}

export default App;