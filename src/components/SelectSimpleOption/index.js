import PropTypes from "prop-types";

const proptypes = {
  option: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }),
  onClick: PropTypes.func,
};

const SelectSimpleOption = ({ option, onClick }) => {
  return (
    <option className="select-simple-option" onClick={() => onClick(option)}>
      {option.label}
    </option>
  );
};

SelectSimpleOption.protoTypes = proptypes;

export default SelectSimpleOption;
