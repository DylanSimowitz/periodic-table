import React from 'react';
import PropTypes from 'prop-types';

const Electron = (props) => {
  const { position, radius } = props;
  return (
    <circle fill="black" transform={`translate(${position.x},${position.y})`} r={radius} cx={100} cy={100} />
  );
};

Electron.propTypes = {
  radius: PropTypes.number,
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

Electron.defaultProps = {
  radius: 4,
};

export default Electron;
