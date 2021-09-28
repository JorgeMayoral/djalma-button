import "./style.scss";
import PropTypes from "prop-types";

const proptypes = {
  label: PropTypes.string,
  destructive: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

const ButtonSecondary = ({
  label,
  destructive = false,
  loading = false,
  disabled = false,
  onClick,
}) => {
  const icon = `button-secondary__text__icon${
    destructive ? "--state-destructive" : ""
  } ${
    loading ? "icon-arrow-sync" : destructive ? "icon-delete" : "icon-circle"
  }`;

  const className = `button-secondary ${
    destructive && `button-secondary--state-destructive`
  }`;

  return (
    <button
      className={className}
      type="button"
      onClick={() => onClick()}
      disabled={disabled}
    >
      <div className={`button-secondary__text`}>
        <div className={icon} />
        <div
          className={`button-secondary__text__label${
            destructive ? "--state-destructive" : ""
          }`}
        >
          {label}
        </div>
      </div>
    </button>
  );
};

ButtonSecondary.propTypes = proptypes;

export default ButtonSecondary;
