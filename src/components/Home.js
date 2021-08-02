import React from "react";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
const Home = () => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <h2>Homepage</h2>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {todos && <TodoList todos={todos} />}
    </div>
  );
};

export default Home;
