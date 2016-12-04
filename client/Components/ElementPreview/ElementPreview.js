import React from 'react';
import styles from './ElementPreview.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../Actions/';
import PropertiesPanel from './PropertiesPanel'

class ElementPreview extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {

  }
  componentWillReceiveProps() {

  }
  render() {
    return (
      <div className={styles.elementPreview}>
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
          <div className={styles.name}>
            {this.props.element.name}
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.header}>
            <PropertiesPanel properties={this.props.element}/>
          </div>
          <div className={styles.appearance}>
            {this.props.element[this.props.property]}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  state;
  return {
    element: state.periodicTable.featuredElement,
    property: state.periodicTable.selectedProperty
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ElementPreview);
