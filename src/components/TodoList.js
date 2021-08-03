import React from "react";
import { Link } from "react-router-dom";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Link to={`/todos/${todo.id}`}>
            <h2>{todo.title}</h2>
            <p>{todo.body}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
