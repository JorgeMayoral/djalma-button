import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useRef } from "react/cjs/react.development";

const proptypes = {
  direction: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
};

const Tooltip = ({ direction = "bottom", text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const containerRef = useRef();
  const tooltipRef = useRef();

  useEffect(() => {
    if (tooltipRef.current) {
      _handleReadjustPosition(direction);
    }
  });

  const _handleReadjustPosition = (direction) => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    console.log("Container before:", containerRect);
    console.log("Tooltip before:", tooltipRect);

    if (direction === "top") {
      tooltipRef.current.style.left =
        containerRect.left +
        containerRect.width / 2 -
        tooltipRect.width / 2 +
        "px";
    } else if (direction === "bottom") {
      console.log(tooltipRef.current.style.bottom);

      tooltipRef.current.style.left =
        containerRect.left +
        containerRect.width / 2 -
        tooltipRect.width / 2 +
        "px";

      tooltipRef.current.style.top =
        containerRect.top - tooltipRect.height / 2 + "px";

      console.log(
        containerRect.top,
        "-",
        tooltipRect.height / 2,
        "=",
        tooltipRef.current.style.top
      );
    } else if (direction === "left") {
      //tooltipRef.current.style.top = containerRect.top + "px";

      tooltipRef.current.style.left = containerRect.right + "px";
    } else if (direction === "right") {
      //tooltipRef.current.style.top = containerRect.top + "px";

      tooltipRef.current.style.left =
        containerRect.left - tooltipRect.width + "px";
    }

    console.log(
      "Container after:",
      containerRef.current.getBoundingClientRect()
    );
    console.log("Tooltip after:", tooltipRef.current.getBoundingClientRect());
  };

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      ref={containerRef}
    >
      {children}
      {isVisible && (
        <div className="tooltip" ref={tooltipRef}>
          <div className="tooltip__container">
            <span className="tooltip__container__arrow" />
            <p className="tooltip__container__text">{text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = proptypes;

export default Tooltip;
