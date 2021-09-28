import "./style.scss";
import PropTypes from "prop-types";

const proptypes = {
  label: PropTypes.string,
  destructive: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

const Button = ({
  label,
  destructive = false,
  loading = false,
  disabled = false,
  type = "primary",
  onClick,
}) => {
  const icon = `button-${type}__text__icon${
    type === "secondary" && destructive ? "--state-destructive" : ""
  } ${
    loading ? "icon-arrow-sync" : destructive ? "icon-delete" : "icon-circle"
  }`;

  const className = `button-${type} ${
    destructive && `button-${type}--state-destructive`
  } ${loading && `button-${type}--state-loading`}`;

  return (
    <button
      className={className}
      type="button"
      onClick={() => onClick()}
      disabled={disabled}
    >
      <div className={`button-${type}__text`}>
        <div className={icon} />
        <div
          className={`button-${type}__text__label${
            type === "secondary" && destructive ? "--state-destructive" : ""
          }`}
        >
          {label}
        </div>
      </div>
    </button>
  );
};

Button.propTypes = proptypes;

export default Button;
