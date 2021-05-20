import PropTypes from "prop-types";
import style from "./Statistics.module.css";
import Notification from "../Notification/Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const ratingColor = positivePercentage >= 50 ? "green" : "red";
  return (
    <>
      {total > 0 ? (
        <ul className={style.list}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li style={{ color: ratingColor }}>
            Positive feedback: {positivePercentage}%
          </li>
        </ul>
      ) : (
        <Notification message="No feedback given"></Notification>
      )}
    </>
  );
};

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export default Statistics;
