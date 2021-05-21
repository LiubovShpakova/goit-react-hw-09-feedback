import { useState, useEffect } from "react";
import "./App.css";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/Feedback/feedback";
import Statistics from "./components/Statistics/Statistics";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (event) => {
    const { value } = event.target;
    switch (value) {
      case "good":
        return setGood(good + 1);
      case "neutral":
        return setNeutral(neutral + 1);
      case "bad":
        return setBad(bad + 1);

      default:
        return;
    }
  };
  useEffect(() => {
    try {
      const { good, neutral, bad } = JSON.parse(
        localStorage.getItem("statistic")
      );
      setGood(good);
      setNeutral(neutral);
      setBad(bad);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    const obj = { good, neutral, bad };
    localStorage.setItem("statistic", JSON.stringify(obj));
  }, [good, neutral, bad]);

  const total = good + neutral + bad;
  const countTotalFeedback = () => {
    return total;
  };
  const positiveFeedback = parseInt((good / countTotalFeedback()) * 100);
  const countPositiveFeedbackPercentage = () => {
    return positiveFeedback;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
}

/*class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (event) => {
    const value = event.target.value;
    this.setState((prevState) => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return parseInt((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;*/
