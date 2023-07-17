import React from "react";

const SubmitExam = ({ handleSubmitExam }) => {
  // In This Page:
  // 1)SUBMIT Button And Its OnClick Action
  return (
    <button
      onClick={handleSubmitExam}
      className="bg-blue-500 w-20 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Finish
    </button>
  );
};

export default SubmitExam;
