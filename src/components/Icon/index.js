import PropTypes from "prop-types";

const proptypes = {
  icon: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};

const colors = {
  neutral: "#FAFAFA",
  error: "#E43E42",
  accent: "#594794",
};

const Icon = ({ icon, size = "2.4rem", color = "neutral" }) => {
  return (
    <span
      className={`${icon}`}
      style={{ fontSize: size, color: colors[color] }}
    />
  );
};

Icon.propTypes = proptypes;

export default Icon;
