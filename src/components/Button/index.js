import './style.scss';

const Button = ({ label, destructive = false, loading = false, ...props }) => {
  const icon = `button__text__icon ${
    loading ? 'icon-arrow-sync' : destructive ? 'icon-delete' : 'icon-circle'
  }`;

  const className = `button ${destructive && 'button--state-destructive'} ${
    loading && 'button--state-loading'
  }`;

  return (
    <button
      className={className}
      type="button"
      {...props}
    >
      <div className="button__text">
        <div className={icon} />
        <div className="button__text__label">{label}</div>
      </div>
    </button>
  );
};

export default Button;
