import React from "react";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <div>
            <strong>{todo.title}</strong>
          </div>
          <div>{todo.body}</div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
