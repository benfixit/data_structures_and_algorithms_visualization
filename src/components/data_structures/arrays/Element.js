import React from 'react';
import PropTypes from 'prop-types';

const Element = props => {
  const { position, element, foundAt } = props;
  const fill = position === foundAt ? 'red' : '#009900';
  return (
    <g>
      <rect
        width="50"
        height="30"
        x={position}
        y={0}
        fill={fill}
        stroke="#ffffff"
        strokeWidth="1"
        text="Text"
      />
      <text x={position + 15} y={20} fill="#ffffff">
        {element}
      </text>
    </g>
  );
};

Element.propTypes = {
  position: PropTypes.number.isRequired,
  element: PropTypes.number.isRequired,
  foundAt: PropTypes.number
};

Element.defaultProps = {
  foundAt: -1
};

export default Element;
