import React from 'react';
import PropTypes from 'prop-types';
import styles from './Group.css';

const Group = props => (
  <div className={styles.group}>
    {props.children}
  </div>
);

Group.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Group;

 /* children: PropTypes.arrayOf(PropTypes.element).isRequired, */
