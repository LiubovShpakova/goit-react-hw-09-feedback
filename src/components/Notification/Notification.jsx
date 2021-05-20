import PropTypes from "prop-types";
import style from "./Notification.module.css";

const Notification = ({ message }) => {
  return <h2 className={style.message}>{message}</h2>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
