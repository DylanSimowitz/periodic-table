import React from 'react';
import PropTypes from 'prop-types';
import styles from './Series.css';

const Series = props => (
  <div className={styles.series}>
    {props.children}
  </div>
);

Series.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Series;
