import PropTypes from "prop-types";

const proptypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

const SelectSimpleOption = ({ text, onClick }) => {
  return (
    <option className="select-simple-option" onClick={() => onClick(text)}>
      {text}
    </option>
  );
};

SelectSimpleOption.protoTypes = proptypes;

export default SelectSimpleOption;
