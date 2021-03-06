import PropTypes from "prop-types";
import Icon from "../Icon";

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
  const iconClass = `button-primary__icon `;
  const icon = loading
    ? "icon-arrow-sync"
    : destructive
    ? "icon-delete"
    : "icon-circle";

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
      <div className={iconClass}>
        <Icon icon={icon} color="#FAFAFA" />
      </div>
      <div className={`button-primary__label`}>{label}</div>
    </button>
  );
};

ButtonPrimary.propTypes = proptypes;

export default ButtonPrimary;
