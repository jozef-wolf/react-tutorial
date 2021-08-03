import React from "react";
import { useParams } from "react-router-dom";

const TodoDetails = () => {
  const { id } = useParams();
  return (
    <div className="todos-details">
      <h2>Todo details - {id}</h2>
    </div>
  );
};

export default TodoDetails;
