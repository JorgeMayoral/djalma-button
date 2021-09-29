import PropTypes from "prop-types";

const proptypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

const Textfield = ({ id, label, placeholder }) => {
  return (
    <div className="textfield-container">
      <label htmlFor={id} className="textfield-label">
        {label}
      </label>
      <input id={id} className="textfield" placeholder={placeholder} />
      <p></p>
    </div>
  );
};

Textfield.propTypes = proptypes;

export default Textfield;
