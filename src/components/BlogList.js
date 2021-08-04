import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <p>
              <em>{blog.author}</em>
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
