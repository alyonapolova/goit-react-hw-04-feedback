import { FeedbackBtnDiv, FeedbackBtn, FeedbackText } from './Feedback.styled';
import PropTypes from 'prop-types';
export const Section = ({ title, children }) => (
  <div>
    <h1>{title}</h1>
    {children}
  </div>
);

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <FeedbackText>Good:{good}</FeedbackText>
      <FeedbackText>Neutral:{neutral}</FeedbackText>
      <FeedbackText>Bad: {bad}</FeedbackText>
      <FeedbackText>Total: {total}</FeedbackText>
      <FeedbackText>Positive feedback: {positivePercentage} %</FeedbackText>
    </div>
  );
};

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackBtnDiv>
      {' '}
      {options.map(option => (
        <FeedbackBtn key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </FeedbackBtn>
      ))}
    </FeedbackBtnDiv>
  );
};

export const Notification = ({ message }) => <h2>{message}</h2>;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
