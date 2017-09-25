import React from 'react';
import PropTypes from 'prop-types';
import { ElementDiv } from '../Element';

const ElementPlaceholder = props =>
  (<ElementDiv>
    <div className="name">
      {props.label}
      <br />
      [{props.range}]
    </div>
  </ElementDiv>);

ElementPlaceholder.propTypes = {
  label: PropTypes.string,
  range: PropTypes.string,
};

ElementPlaceholder.defaultProps = {
  label: 'label',
  range: 'range',
};

export default ElementPlaceholder;
