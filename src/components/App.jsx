import { useEffect, useState } from "react";
import Description from "./Description.jsx";
import Options from "./Options.jsx";
import Feedback from "./Feedback.jsx";
import Notification from "./Notification.jsx";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedState = localStorage.getItem("state");
    if (savedState !== null) {
      return JSON.parse(savedState);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(feedback));
  }, [feedback]);

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description></Description>
      <Options
        onChange={updateFeedback}
        onReset={resetFeedback}
        onSum={totalFeedback}
      ></Options>
      {totalFeedback > 0 ? (
        <Feedback
          feedbackItem={feedback}
          totalFeedbackItem={totalFeedback}
          positiveFeedbackItem={positiveFeedback}
        ></Feedback>
      ) : (
        <Notification></Notification>
      )}
    </>
  );
}
