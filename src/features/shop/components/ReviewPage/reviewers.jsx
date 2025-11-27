import React from "react";

function Reviewers({
  name,
  rating,
  good,
  bad,
  date,
}) {
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <div className="w-full bg-gray-100 rounded-2xl p-4 flex flex-col relative">
      <h3 className="font-semibold text-lg text-gray-900">{name}</h3>

      <div className="flex items-center gap-1 mt-1">
        <span className="text-orange-400 text-xl">{stars}</span>
      </div>

      <div className="mt-3">
        <div className="font-semibold text-gray-900">Достоинства</div>
        <div className="text-gray-800">{good}</div>
      </div>

      <div className="mt-3">
        <div className="font-semibold text-gray-900">Недостатки</div>
        <div className="text-gray-800">{bad}</div>
      </div>

      <div className="absolute bottom-4 right-4 text-gray-500 text-sm">
        {date}
      </div>
    </div>
  );
}

export default Reviewers;
