import React, { useContext, useEffect, useState } from "react";
import { correctIcon, wrongIcon } from "../../utils/Icons";
import { Score } from "../../utils/ScoreContext";
import axios from "axios";
import URL from "../../utils/URL";

const QuestionChoices = ({ word }) => {
  // IN THIS PAGE:
  // 1)choices
  // 2)ANSWER STATUS
  const [answer, setAnswer] = useState(null);
  const [status, setStatus] = useState(false);
  const [chosen, setChosen] = useState(null);
  const { score, setScore } = useContext(Score);
  const choices = ["Noun", "Adverb", "Adjective", "Verb"];

  useEffect(() => {
    setAnswer(null);
    setStatus(false);
    setChosen(null);
  }, [word]);

  const handleChooseAnswer = async (choice) => {
    // SEND ANSWER WITH WORD ID TO GET ANSWER IS CORRECT OR WRONG
    try {
      const { data } = await axios.post(`${URL}/wordList`, {
        id: word?.id,
        choice,
      });
      // IF CORRECT ANSWER
      if (data.answer == "correct") {
        setAnswer(true);
        setScore(score + 10);
      }
      // IF WRONG ANSWER
      else {
        setAnswer(false);
      }
      setChosen(choice);
      setStatus(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-2 w-fit">
        {/* CHOICES */}
        {choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => {
              handleChooseAnswer(choice);
            }}
            className={` ${
              status == true
                ? chosen == choice
                  ? answer == true
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-transparent text-slate-700 opacity-25"
                : "bg-transparent hover:bg-blue-500 hover:text-white text-blue-700"
            } font-semibold py-2 px-4 border border-slate-500 rounded`}
            disabled={status}
          >
            {choice}
          </button>
        ))}
      </div>
      {/* ANSWER STATUS */}
      {/* CORRECT */}
      {answer == true && (
        <div className="flex justify-center  text-green-600">
          <span>Correct</span>
          <span>{correctIcon}</span>
        </div>
      )}
      {/* WRONG */}
      {answer == false && (
        <div className="flex justify-center text-red-600">
          <span>Wrong</span>
          <span>{wrongIcon}</span>
        </div>
      )}
    </>
  );
};

export default QuestionChoices;
