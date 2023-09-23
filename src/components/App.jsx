import { Component } from 'react';
import {
  Section,
  Statistics,
  FeedbackOptions,
  Notification,
} from './Feedback/Feedback';
import { FeedbackDiv } from './Feedback/Feedback.styled';
import PropTypes from 'prop-types';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    clickFeedback: false,
  };

  onLeaveFeedback = option => {
    option = option.toLowerCase();
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
      clickFeedback: true,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback(this.state);
    return total > 0 ? ((100 * good) / total).toFixed(0) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <FeedbackDiv>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
          {this.state.clickFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </FeedbackDiv>
    );
  }
}

App.propTypes = {
  clickFeedback: PropTypes.bool.isRequired,
};
