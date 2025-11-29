import React from "react";
import { useParams } from "react-router-dom";
import useGetOne from "../../../../hooks/useGetOne";
function BlogSingle() {
  const { id } = useParams();

  const { data, isError, isLoading } = useGetOne("/blogCart", id, [
    `blogCart/${id}`,
  ]);

  if (isLoading) return <h1>loading...</h1>;

  console.log(data);
  return (
    <div>
      <div>
        <p>{data?.titleBlog}</p>
      </div>
    </div>
  );
}

export default BlogSingle;
