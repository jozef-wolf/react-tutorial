import React from "react";
import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Josef");
  const [age, setAge] = useState(30);
  // let name = "Josef";

  const handleClick = () => {
    setName("John");
    setAge(31);
  };

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
