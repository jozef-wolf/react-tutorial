import React from "react";

const home = () => {
  const handleClick = () => {
    console.log("Hello!");
  };

  const handleClickAgain = (name) => {
    console.log("Hello again " + name);
  };

  return (
    <div>
      <h2>Homepage</h2>
      <p></p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClickAgain("Josef")}>Click me again</button>
    </div>
  );
};

export default home;
