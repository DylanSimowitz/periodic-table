import React from 'react';
import styles from './FeaturedElement.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../Actions/';

class FeaturedElement extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {

  }
  componentWillReceiveProps() {

  }
  render() {
    return (
      <div className={styles.featuredElement}>
        <div className={styles.preview}>
          <div className={styles.atomicNumber}>
            {this.props.element.number}
          </div>
          <div className={styles.atomicWeight}>
            {this.props.element.weight}
          </div>
          <div className={styles.symbol}>
            {this.props.element.symbol}
          </div>

        </div>
        <div className={styles.container}>
          <div className={styles.name}>
            {this.props.element.name}
          </div>
          <ul className={styles.properties}>
            {/*{
              Object.keys(this.props.element).map((property,item) => {
                return <li key={item} className={styles.property}>{`${property}: ${this.props.element[property]}`}</li>
              })
            }*/}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  state;
  return {
    element: state.periodicTable.featuredElement
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedElement);