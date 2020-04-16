import React, { useEffect, useState } from "react";
import bloglist from "../../editable-stuff/blog";
const BlogPost = ({ match }) => {
  const { id } = match.params;

  return (
    <div className="container-lg mt-5">
      {bloglist[id] && <div>{bloglist[id].getBlog()}</div>}
      {!bloglist[id] && (
        <h1 className="display-1 text-center">404 - Page not found</h1>
      )}
    </div>
  );
};

export default BlogPost;
