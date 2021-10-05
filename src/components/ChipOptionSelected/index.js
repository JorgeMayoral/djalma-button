import PropTypes from "prop-types";
import Icon from "../Icon";

const proptypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const ChipOptionSelected = ({ text, onClick }) => {
  return (
    <div className="chip-option-selected">
      <span className="chip-option-selected__text">{text}</span>
      <span className="chip-option-selected__icon" onClick={onClick}>
        <Icon color="#FFFFFF" icon="icon-dismiss-circle" size="2.4rem" />
      </span>
    </div>
  );
};

ChipOptionSelected.propTypes = proptypes;

export default ChipOptionSelected;
