import React, { useContext } from "react";
import { sucessImage } from "../../utils/Images";
import { failImage } from "../../utils/Images";
import { Score } from "../../utils/ScoreContext";
const RankMessageImage = () => {
  const { rank } = useContext(Score);
  return <>{rank > 50 ? sucessImage : failImage}</>;
};

export default RankMessageImage;
