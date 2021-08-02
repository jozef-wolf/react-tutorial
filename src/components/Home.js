import React from "react";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
const Home = () => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTodos(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Homepage</h2>
      {isLoading && <div>Loading...</div>}
      {todos && <TodoList todos={todos} />}
    </div>
  );
};

export default Home;
