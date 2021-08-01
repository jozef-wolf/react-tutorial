import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  //useState changes state
  const [name, setName] = useState("Josef");
  const [age, setAge] = useState(30);

  const handleClick = () => {
    setName("John");
    setAge(31);
  };

  //useEffect runs for every render
  useEffect(() => {
    console.log("use effect ran");
  });

  return (
    <div>
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
