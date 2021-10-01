import PropTypes from "prop-types";
import { useState } from "react";
import { useRef } from "react/cjs/react.development";

const proptypes = {
  direction: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
};

const Tooltip = ({ direction, text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const tooltipRef = useRef();

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="tooltip" ref={tooltipRef}>
          <div className="tooltip__container">
            <p className="tooltip__container__text">{text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = proptypes;

export default Tooltip;
