import PropTypes from "prop-types";
import style from "./feedback.module.css";

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={style.buttons}>
      {options.map((option) => {
        return (
          <li key={option}>
            <button type="button" value={option} onClick={onLeaveFeedback}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func,
};
export default Feedback;
