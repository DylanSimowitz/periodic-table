import React from 'react';
import styles from './Element.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../Actions/';

class Element extends React.Component {
  constructor() {
    super()
  }

  handleMouseOver = () => {
    this.props.actions.setFeaturedElement(this.props.element)
  }

  render() {
    return (
      <div className={styles.element} onMouseOver={this.handleMouseOver}>
        <div className={styles.atomicNumber}>
          <div>
            {this.props.element['Atomic Number']}
          </div>
        </div>
        <div className={styles.symbol}>
          {this.props.element['Symbol']}
        </div>
        <div className={styles.name}>
          {this.props.element['Element']}
        </div>
        <div className={styles.mass}>
          {this.props.element['Atomic Weight'].toFixed(4).replace(/0+$/, '').replace(/\.$/, '')}
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Element);
