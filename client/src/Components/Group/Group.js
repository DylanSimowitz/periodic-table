import React from 'react';
import styles from './Group.css';

class Group extends React.Component {
  handleChange = (e) => {
    this.props.actions.changeUser(e.target.value)
  }
  render() {
    return (
      <div className={styles.group}>
       {this.props.children}
      </div>
    );
  }
}

export default Group
