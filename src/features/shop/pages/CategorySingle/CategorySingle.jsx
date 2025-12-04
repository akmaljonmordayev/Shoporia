import React from "react";
import { useParams } from "react-router-dom";

function CategorySingle() {
  const { categoryName } = useParams();
  return <div>CategorySingle {categoryName}</div>;
}

export default CategorySingle;
