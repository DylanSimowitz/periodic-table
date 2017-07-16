import React from 'react';
import styles from './Series.css';

class Series extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className={styles.series}>
       {this.props.children}
      </div>
    );
  }
}

export default Series
