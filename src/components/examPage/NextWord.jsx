import React from "react";
import { nextIcon } from "../../utils/Icons";

const NextWord = ({ handleNextWord }) => {
  // In This Page:
  // 1)Next Button And Its OnClick Action
  return (
    <>
      {/* 1)Next Button And Its OnClick Action */}
      <button
        onClick={handleNextWord}
        className="bg-blue-500 w-20  hover:bg-blue-700 text-white font-bold py-2 px-7 rounded"
      >
        {nextIcon}
      </button>
    </>
  );
};

export default NextWord;
