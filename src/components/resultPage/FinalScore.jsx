import React, { useContext } from "react";
import { Score } from "../../utils/ScoreContext";

const FinalScore = () => {
  // IN THIS PAGE :
  // 1)FINAL SCORE OF EXAM

  // CONTEXT CONSUMING
  const { score } = useContext(Score);
  return <div className="text-xl">Score: {score} % </div>;
};

export default FinalScore;
