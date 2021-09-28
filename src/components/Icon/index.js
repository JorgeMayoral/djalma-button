import PropTypes from "prop-types";

const proptypes = {
  icon: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};

const sizes = {
  medium: "2.4rem",
  large: "4.8rem",
};

const colors = {
  neutral: "#FAFAFA",
  error: "#E43E42",
  accent: "#594794",
};

const Icon = ({ icon, size = "medium", color = "neutral" }) => {
  return (
    <span
      className={`${icon}`}
      style={{ fontSize: sizes[size], color: colors[color] }}
    />
  );
};

Icon.propTypes = proptypes;

export default Icon;
