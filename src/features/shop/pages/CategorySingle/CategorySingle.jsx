import React from "react";
import { useParams } from "react-router-dom";
import useGetAll from "../../../../hooks/UseGetAll";

function CategorySingle() {
  const { categoryName } = useParams();
  const { data, isLoading, isError } = useGetAll("/typeOfElectronics");

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  const categoryData = data?.[0]?.[categoryName] || [];
  console.log(categoryData);

  return (
    <div>
      {categoryData.map((item, i) => (
        <div key={i}>{item.name}</div>
      ))}
    </div>
  );
}

export default CategorySingle;
