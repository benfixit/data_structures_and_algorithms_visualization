import React from 'react';
import PropTypes from 'prop-types';

const Canvas = props => {
  const { children, width } = props;
  return (
    <svg
      width={width}
      height="30"
      style={{ backgroundColor: '#fafafa', color: 'white' }}
    >
      {children}
    </svg>
  );
};

Canvas.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number
};

Canvas.defaultProps = {
  width: 500
};

export default Canvas;
