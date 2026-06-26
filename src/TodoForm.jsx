import { useState } from "react";

function TodoForm({ onAdd }) {
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (input.trim() === "") return;
    onAdd(input);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
