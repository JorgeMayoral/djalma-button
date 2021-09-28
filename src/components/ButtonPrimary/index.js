import "./style.scss";
import PropTypes from "prop-types";

const proptypes = {
  label: PropTypes.string,
  destructive: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

const ButtonPrimary = ({
  label,
  destructive = false,
  loading = false,
  disabled = false,
  onClick,
}) => {
  const icon = `button-primary__text__icon ${
    loading ? "icon-arrow-sync" : destructive ? "icon-delete" : "icon-circle"
  }`;

  const className = `button-primary ${
    destructive && `button-primary--state-destructive`
  } ${loading && `button-primary--state-loading`}`;

  return (
    <button
      className={className}
      type="button"
      onClick={() => onClick()}
      disabled={disabled}
    >
      <div className={`button-primary__text`}>
        <div className={icon} />
        <div className={`button-primary__text__label`}>{label}</div>
      </div>
    </button>
  );
};

ButtonPrimary.propTypes = proptypes;

export default ButtonPrimary;
