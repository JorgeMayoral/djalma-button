import PropTypes from "prop-types";
import Icon from "../Icon";

const proptypes = {
  option: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }),
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
};

const SelectSimpleOption = ({ option, onClick, isSelected }) => {
  return (
    <div className="select-simple-option" onClick={() => onClick(option)}>
      {option.label}
      <span className={isSelected ? "" : "select-simple-option--icon-hidden"}>
        <Icon
          color="#594794"
          icon={isSelected ? "icon-radio-on" : "icon-radio-off"}
          size="2.4rem"
        />
      </span>
    </div>
  );
};

SelectSimpleOption.protoTypes = proptypes;

export default SelectSimpleOption;
