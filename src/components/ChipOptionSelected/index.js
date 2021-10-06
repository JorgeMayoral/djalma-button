import PropTypes from "prop-types";
import Icon from "../Icon";

const proptypes = {
  option: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }),
  onClick: PropTypes.func,
};

const ChipOptionSelected = ({ option, onClick }) => {
  return (
    <div className="chip-option-selected">
      <span className="chip-option-selected__text">{option.label}</span>
      <span
        className="chip-option-selected__icon"
        onClickCapture={() => onClick(option)}
      >
        <Icon color="#FFFFFF" icon="icon-dismiss-circle" size="2.4rem" />
      </span>
    </div>
  );
};

ChipOptionSelected.propTypes = proptypes;

export default ChipOptionSelected;
