import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ElementPreview.css';
import * as actions from '../../Actions/';
import PropertiesPanel from './PropertiesPanel';

class ElementPreview extends React.Component {
  componentWillMount() {
    const { element } = this.props;
    this.props.actions.setFeaturedElement(element);
  }
  componentWillReceiveProps(nextProps) {
    const { element } = this.props;
    if (element !== nextProps.element) {
      this.props.actions.setFeaturedElement(nextProps.element);
    }
  }
  render() {
    return (
      <div className={styles.elementPreview}>
        <div className={styles.preview}>
          <div className={styles.atomicNumber}>
            {this.props.featuredElement.number}
          </div>
          <div className={styles.atomicWeight}>
            {this.props.featuredElement.weight}
          </div>
          <div className={styles.symbol}>
            {this.props.featuredElement.symbol}
          </div>
          <div className={styles.name}>
            {this.props.featuredElement.name}
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.header}>
            <PropertiesPanel properties={this.props.featuredElement} />
          </div>
          <div className={styles.property}>
            {this.props.featuredElement[this.props.property]}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  featuredElement: state.table.featuredElement,
  property: state.table.selectedProperty,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

ElementPreview.propTypes = {
  element: PropTypes.string.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  property: PropTypes.string.isRequired,
  featuredElement: PropTypes.shape({
    number: PropTypes.int,
    symbol: PropTypes.string,
    name: PropTypes.string,
    weight: PropTypes.int,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ElementPreview);
