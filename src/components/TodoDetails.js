import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TodoDetails = () => {
  const { id } = useParams();
  const {
    data: todo,
    error,
    isLoading,
  } = useFetch("https://jsonplaceholder.typicode.com/posts/" + id);

  return (
    <div className="todos-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {todo && (
        <article>
          <h2>{todo.title}</h2>
          <p>{todo.body}</p>
        </article>
      )}
    </div>
  );
};

export default TodoDetails;
