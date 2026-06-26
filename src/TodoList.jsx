function TodoList({onToggle,onDelete,onMoveUp, onMoveDown, todos}){
  return(
    <ul>
        {todos.map((todo) => (
          <li 
            key={todo._id}
            onClick={()=> onToggle(todo._id)}
            style={{textDecoration: todo.completed? "line-through": "none", cursor: "pointer"}}
          >
            {todo.text}
            <button onClick={(event) => {
              event.stopPropagation(); // Event bubbling
              onDelete(todo._id)
            }}>Delete</button>
            <button onClick={(event)=>{
              event.stopPropagation();
              onMoveUp(todo._id)
            }
            }>👆</button>
            <button onClick={(event)=>{
              event.stopPropagation();
              onMoveDown(todo._id)
              }}>👇</button>
          </li>
        ))}
      </ul>
  )
}
export default TodoList;