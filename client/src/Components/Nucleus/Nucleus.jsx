import React from 'react';
import PropTypes from 'prop-types';

const Nucleus = (props) => {
  return (
    <g>
      <circle r={props.radius} fill="black" cx={100} cy={100} />
      <text x="50%" y="50%" textAnchor="middle" fill="#fff" dy=".4em">{props.element}</text>
    </g>
  );
}

Nucleus.propTypes = {
  radius: PropTypes.number,
  element: PropTypes.string.isRequired,
};

Nucleus.defaultProps = {
  radius: 25,
};

export default Nucleus;
