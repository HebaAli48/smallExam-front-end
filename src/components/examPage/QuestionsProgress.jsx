import React from "react";

const QuestionsProgress = ({ count }) => {
  // In This Component i showed:
  // 1)No Of Current Question According To Total Questions
  // 2)Progress Bar With Solved Question According To Total Questions
  return (
    <>
      {/* 1)No Of Current Question According To Total Questions */}
      <div>{count + 1}/10</div>
      {/* 2)Progress Bar With Solved Question According To Total Questions */}
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${count * (100 / 10)}%` }}
        >
          {count > 0 ? `${(count / 10) * 100}%` : ""}{" "}
        </div>
      </div>
    </>
  );
};

export default QuestionsProgress;
