import React from "react";
import { Link } from "react-router-dom";
import { tryAgainIcon } from "../../utils/Icons";

const TryAgain = () => {
  // IN THIS COMPONENT:
  // 1) TRY AGAIN BUTTON TO LINK TO ANOTHER EXAM
  return (
    <>
      {/* TRY AGAIN BUTTON TO LINK TO ANOTHER EXAM */}
      <Link
        to="/exam"
        className="mb-2 flex items-center text-btn-primary hover:translate-x-[-2px] hover:text-btn-Secondary transition-all"
      >
        <span>{tryAgainIcon}</span>Try again!
      </Link>
    </>
  );
};

export default TryAgain;
