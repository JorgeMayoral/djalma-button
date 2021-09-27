import { useState } from 'react';
import './style.scss';

const Button = ({ label, destructive = false, loading = false, ...props }) => {
  const [isClicked, setIsClicked] = useState(false);

  const icon = `icon ${
    loading ? 'icon-arrow-sync' : destructive ? 'icon-delete' : 'icon-circle'
  }`;

  const className = `${destructive ? 'destructive' : 'primary'} ${
    loading && 'loading'
  } ${isClicked && 'clicked'}`;

  return (
    <button
      className={className}
      type="button"
      {...props}
      onClick={() => setIsClicked(true)}
    >
      <div className="layout">
        <div className={icon} />
        <div className="label">{label}</div>
      </div>
    </button>
  );
};

export default Button;
