import React from "react";

const home = () => {
  const handleClick = () => {
    console.log("Hello!");
  };

  return (
    <div>
      <h2>Homepage</h2>
      <p></p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default home;
