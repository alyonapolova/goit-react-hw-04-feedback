import { useEffect, useState } from 'react';
import {
  Section,
  Statistics,
  FeedbackOptions,
  Notification,
} from './Feedback/Feedback';
import { FeedbackDiv } from './Feedback/Feedback.styled';
import PropTypes from 'prop-types';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [clickFeedback, setClickFeedback] = useState(false);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'Good':
        setGood(prev => prev + 1);
        break;
      case 'Neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'Bad':
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
    setClickFeedback(true);
  };

  // const onLeaveFeedbackGood = () => {
  //   setGood(prev => prev + 1);
  //   setClickFeedback(true);
  // };
  // const onLeaveFeedbackNeutral = () => {
  //   setNeutral(prev => prev + 1);
  //   setClickFeedback(true);
  // };
  // const onLeaveFeedbackBad = () => {
  //   setBad(prev => prev + 1);
  //   setClickFeedback(true);
  // };

  useEffect(() => {
    const newTotalFeedback = good + neutral + bad;
    setTotalFeedback(newTotalFeedback);
  }, [good, neutral, bad]);

  useEffect(() => {
    const newPositivePercentage =
      totalFeedback > 0 ? Number(((100 * good) / totalFeedback).toFixed(0)) : 0;
    setPositivePercentage(newPositivePercentage);
    //console.log(typeof newPositivePercentage);
  }, [good, neutral, bad, totalFeedback]);

  return (
    <FeedbackDiv>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={onLeaveFeedback}
          // onLeaveFeedbackGood={onLeaveFeedbackGood}
          // onLeaveFeedbackNeutral={onLeaveFeedbackNeutral}
          // onLeaveFeedbackBad={onLeaveFeedbackBad}
        ></FeedbackOptions>
        {clickFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </FeedbackDiv>
  );
}

App.propTypes = {
  clickFeedback: PropTypes.bool.isRequired,
};

export default App;
