import PropTypes from "prop-types";

const proptypes = {
  icon: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};

const Icon = ({ icon, size = "2.4rem", color = "#FAFAFA" }) => {
  return (
    <span className={`${icon}`} style={{ fontSize: size, color: color }} />
  );
};

Icon.propTypes = proptypes;

export default Icon;
