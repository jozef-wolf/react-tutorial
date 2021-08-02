import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>Navigation</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Add new todo</Link>
      </div>
    </div>
  );
};

export default Navbar;
