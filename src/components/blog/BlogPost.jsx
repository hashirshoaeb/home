import React from "react";
import { useParams } from "react-router-dom"; // Import the useParams hook for react router v6 or later
import bloglist from "../../editable-stuff/blog";

const BlogPost = () => {
  const { id } = useParams(); // Use useParams to get the id
  const post = bloglist[id]; // Get the post using the ID

  return (
    <div className="container-lg mt-5">
      {post && (
        <div>
          <h1 className="display-2 text-center">{post.title}</h1>
          <img className="img-fluid mb-2" src={post.image} alt={post.title} />
          {post.getBlog()}
        </div>
      )}
      {!post && <h1 className="display-1 text-center">404 - Page not found</h1>}
    </div>
  );
};

export default BlogPost;