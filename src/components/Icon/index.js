import PropTypes from "prop-types";

const proptypes = {
  icon: PropTypes.string,
};

const Icon = ({ icon }) => {
  return (
    <div>
      <span className={icon} />
    </div>
  );
};

Icon.propTypes = proptypes;

export default Icon;
