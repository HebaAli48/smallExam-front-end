import React, { useContext, useEffect, useState } from "react";
import URL from "../utils/URL";
import axios from "axios";
import Questions from "../components/examPage/Questions";
import SubmitExam from "../components/examPage/SubmitExam";
import NextWord from "../components/examPage/NextWord";
import QuestionChoices from "../components/examPage/QuestionChoices";
import { Score } from "../utils/ScoreContext";
import { useNavigate } from "react-router";
import QuestionsProgress from "../components/examPage/QuestionsProgress";

const ExamPage = () => {
  // HOOKS
  const [words, setWords] = useState([]);
  const [count, setCount] = useState(0);
  const { score, setScore, rank, setRank } = useContext(Score);
  const navigate = useNavigate();

  // FETCH WORDS
  useEffect(() => {
    const fetchWords = async () => {
      const { data } = await axios.get(`${URL}/wordList`);
      setWords(data);
      if (count == 0) {
        setScore(0);
      }
    };
    fetchWords();
  }, []);

  // HANDLE NEXT QUESTION
  const handleNextWord = () => {
    // Increment Count To Get Next Question
    setCount(count + 1);
  };

  // HANDLE SUBMMIT EXAM
  const handleSubmitExam = async () => {
    // FETCH RANK FROM API
    const { data } = await axios.post(`${URL}/scoresList`, { score: score });
    const finalRank = data.rank;
    // SET RANK STATE WITH FETCHED RANK
    setRank(finalRank);
    // Navigate To Result Page
    navigate("/result");
  };

  return (
    <>
      <div className="flex flex-col items-center bg-gradient-to-tr from-blue-200 to-purple-200 pt-2">
        {/* QUESTION */}
        <Questions word={words[count]} count={count} />
        <Score.Provider value={{ score, setScore }}>
          {/* CHOICES */}
          <QuestionChoices
            word={words[count]}
            score={score}
            setScore={setScore}
          />
        </Score.Provider>
        <div className="flex flex-col sm:flex-row sm:gap-10 gap-3 mt-5 justify-center items-center">
          {count === 9 ? (
            // SUBMMIT EXAM
            <SubmitExam handleSubmitExam={handleSubmitExam} />
          ) : (
            // NEXT QUESTION
            <NextWord handleNextWord={handleNextWord} />
          )}
        </div>
        {/* EXAM PROGRESS */}
        <QuestionsProgress count={count} />
      </div>
    </>
  );
};

export default ExamPage;
