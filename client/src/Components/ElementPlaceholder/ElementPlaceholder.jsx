import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Element/Element.css';


const ElementPlaceholder = props =>
  (<div className={styles.element}>
    <div className={styles.name}>
      {props.label}
      <br />
      [{props.range}]
    </div>
  </div>);

ElementPlaceholder.propTypes = {
  label: PropTypes.string,
  range: PropTypes.string,
};

ElementPlaceholder.defaultProps = {
  label: 'label',
  range: 'range',
};

export default ElementPlaceholder;
