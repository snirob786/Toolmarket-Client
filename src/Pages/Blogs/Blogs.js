import React from "react";
import { useQuery } from "react-query";
import Loader from "../../Shared/Loader/Loader";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Blog from "./Blog";

const Blogs = () => {
  const { data: blogs, isLoading } = useQuery("blogs", () =>
    fetch("https://shrouded-anchorage-66957.herokuapp.com/blogs").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="py-20">
      <SectionTitle title="Read Our Blogs"></SectionTitle>
      <div className="w-3/4 mx-auto grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
