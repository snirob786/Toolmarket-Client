import React from "react";

const Blog = ({ blog }) => {
  const { order, ques, ans } = blog;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {order}. {ques}
        </h2>
        <p>{ans}</p>
      </div>
    </div>
  );
};

export default Blog;
<h2>This is blogs</h2>;
