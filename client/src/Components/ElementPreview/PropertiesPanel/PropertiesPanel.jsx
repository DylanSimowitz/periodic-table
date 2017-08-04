import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { selectProperty } from '../../../Actions';
import styles from './PropertiesPanel.css';

class PropertiesPanel extends Component {

  handleChange = (event) => {
    this.props.selectProperty(event.target.value);
  }

  render() {
    const { properties } = this.props;
    return (
      <div className={styles.panel}>
        <span>Property:</span>
        <select onChange={this.handleChange} value={this.props.selectedProperty}>
          { // eslint-disable-next-line
            Object.keys(properties).map((property, index) => <option value={property} key={index}>{property}</option>)
          }
        </select>
      </div>
    );
  }

}

const mapStateToProps = state => ({ selectedProperty: state.table.selectedProperty });

PropertiesPanel.propTypes = {
  selectProperty: PropTypes.func.isRequired,
  selectedProperty: PropTypes.string.isRequired,
  properties: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, { selectProperty })(PropertiesPanel);
