import React from 'react';
import styles from './Element.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../Actions/';

class Element extends React.Component {
  handleClick = () => {
    this.props.actions.setFeaturedElement(this.props.element)
  }

  render() {
    const blockStyle = styles['block--' + this.props.element.block];
    return (
      <div className={blockStyle} onClick={this.handleClick}>
        <div className={styles.atomicNumber}>
          <div>
            {this.props.element.number}
          </div>
        </div>
        <div className={styles.symbol}>
          {this.props.element.symbol}
        </div>
        <div className={styles.name}>
          {this.props.element.name}
        </div>
        <div className={styles.mass}>
          {parseFloat(this.props.element.weight).toFixed(4).replace(/\.?0+$/, '')}
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
