import React, { useContext, useEffect } from "react";
import { Score } from "../../utils/ScoreContext";
import Cookies from "js-cookie";

const FinalRank = () => {
  // IN THIS PAGE :
  // 1)FINAL RANK OF EXAM
  // 2)MESSAGE SHOWED ACCORDING TO RANK

  // CONTEXT CONSUMING
  const { rank } = useContext(Score);
  // GET USER FIRST NAME FROM COOKIES
  let userName = Cookies.get("userFirstName");

  return (
    <>
      {/* RANK */}
      <div className="text-2xl"> Rank: {Number(rank.toFixed(2))} %</div>
      {/* MESSAGE ACCORDING TO RANK */}
      {rank > 50 ? (
        <div className="text-emerald-700 text-2xl">
          Congratulations {userName} , you passed the exam
        </div>
      ) : (
        <div className="text-red-500 text-2xl">
          sorry {userName}, You Failed the exam
        </div>
      )}
    </>
  );
};

export default FinalRank;
