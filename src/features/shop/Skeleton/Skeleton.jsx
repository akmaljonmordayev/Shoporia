import React from "react";
function Skeleton() {
  return (
    <div className="p-4 max-w-4xl mx-auto animate-pulse space-y-4">
      <div className="h-8 bg-gray-300 rounded w-3/4 dark:bg-gray-700"></div>
      <div className="h-6 bg-gray-300 rounded w-1/2 dark:bg-gray-600"></div>
      <div className="h-64 bg-gray-300 rounded dark:bg-gray-700"></div>
    </div>
  );
}


export default Skeleton