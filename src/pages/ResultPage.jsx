import React, { useContext, useEffect, useState } from "react";
import FinalScore from "./../components/resultPage/FinalScore";
import FinalRank from "../components/resultPage/FinalRank";
import TryAgain from "../components/resultPage/TryAgain";
import RankMessageImage from "./../components/resultPage/RankMessageImage";
const ResultPage = () => {
  // In This Page I Showed :
  // 1) Final Score
  // 2)Rank
  // 3) Try Exam Again
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center w-full">
        <RankMessageImage />
        <div className="flex flex-col  gap-3 items-center justify-center sm:w-[50vw] bg-gradient-to-tr from-blue-200 to-purple-200 pt-2">
          {/* 1) Final Score */}
          <FinalScore />
          {/* 2)Rank */}
          <FinalRank />
          {/* 3) Try Exam Again */}
          <TryAgain />
        </div>
      </div>
    </>
  );
};

export default ResultPage;
