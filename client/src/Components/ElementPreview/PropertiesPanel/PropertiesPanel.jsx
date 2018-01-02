import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { selectProperty } from '../../../Actions';

const Styles = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid black;
  .span {
    margin-right: 5px;
  }
  .select {
    width: 100%;
  }
`;

class PropertiesPanel extends Component {

  handleChange = (event) => {
    this.props.selectProperty(event.target.value);
  }

  render() {
    const { properties } = this.props;
    return (
      <Styles>
        <span className="span">Property:</span>
        <select className="select" onChange={this.handleChange} value={this.props.selectedProperty}>
          { // eslint-disable-next-line
            properties.map((property, index) => <option value={property} key={index}>{property.split(/(?=[A-Z])/).join(" ")}</option>)
          }
        </select>
      </Styles>
    );
  }
}

const mapStateToProps = state => ({ selectedProperty: state.table.selectedProperty });

PropertiesPanel.propTypes = {
  selectProperty: PropTypes.func.isRequired,
  selectedProperty: PropTypes.string.isRequired,
  properties: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, { selectProperty })(PropertiesPanel);
