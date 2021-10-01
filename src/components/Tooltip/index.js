import PropTypes from "prop-types";
import { useState } from "react";

const proptypes = {
  direction: PropTypes.string,
  text: PropTypes.text,
  children: PropTypes.node,
};

const Tooltip = ({ direction, text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {isVisible && (
        <div className="tooltip__container">
          <p className="tooltip__container__text">{text}</p>
        </div>
      )}
      {children}
    </div>
  );
};

Tooltip.propTypes = proptypes;

export default Tooltip;
