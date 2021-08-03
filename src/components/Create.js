import React, { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("User");
  const [isLoading, setIsLoading] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();
    const todo = { title, body, author };
    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }).then(() => {
      console.log("new todo added");
      setIsLoading(false);
    });
  };

  return (
    <div className="create">
      <h2>Add a New Todo</h2>
      <form onSubmit={handleSumbit}>
        <label>Todo Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Todo Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="User">User</option>
          <option value="Anonymous">Anonymous</option>
        </select>
        {!isLoading && <button>Add todo</button>}
        {isLoading && <button disabled>Adding todo...</button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
