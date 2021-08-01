import React from "react";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
const Home = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTodos(data);
      });
  }, []);

  return (
    <div>
      <h2>Homepage</h2>
      {todos && <TodoList todos={todos} />}
    </div>
  );
};

export default Home;
