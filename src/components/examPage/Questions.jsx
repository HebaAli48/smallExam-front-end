import React from "react";
import loadingSpinner from "./../../utils/Loading";
const Questions = ({ word, count }) => {
  // IN THIS COMPONENT :
  // 1)CURRENT QUESTION
  // 2) LOADING TILL QUESTION GET FROM API
  return (
    <>
      <div className="text-3xl font-semibold mb-3" key={word?.id}>
        {!word && loadingSpinner}
        {count + 1} - {word?.word}
      </div>
    </>
  );
};

export default Questions;
