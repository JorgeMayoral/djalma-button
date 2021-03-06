import PropTypes from "prop-types";
import Icon from "../Icon";

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
  const iconClass = `button-secondary__icon${
    destructive ? "--state-destructive" : ""
  }`;
  const icon = loading
    ? "icon-arrow-sync"
    : destructive
    ? "icon-delete"
    : "icon-circle";

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
      <div className={iconClass}>
        <Icon icon={icon} color={destructive ? "#E43E42" : "#594794"} />
      </div>
      <div
        className={`button-secondary__label${
          destructive ? "--state-destructive" : ""
        }`}
      >
        {label}
      </div>
    </button>
  );
};

ButtonSecondary.propTypes = proptypes;

export default ButtonSecondary;
