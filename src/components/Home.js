import React from "react";
import TodoList from "./TodoList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: todos,
    isLoading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

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
