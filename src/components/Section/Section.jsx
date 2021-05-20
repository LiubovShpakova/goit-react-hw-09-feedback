import PropTypes from "prop-types";
import style from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <div>
      <h1 className={style.title}>{title}</h1>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Section;
