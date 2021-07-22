import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as actions from '../../Actions/';
import PropertiesPanel from './PropertiesPanel';

const StyledElementPreview = styled.div`
  position: absolute;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 0 -1px -1px;
  height: calc(90px * 2.5);
  box-sizing: border-box;
  display: flex;
  border: 1px solid black;
  .container {
    display: flex;
    flex-direction: column;
  }
  .header {
  }
  .preview {
    width: calc(74px * 2.5);
    box-sizing: border-box;
    text-align: center;
    border-right: 1px solid black;
    padding: 5px;
    position: relative;
  }
  .symbol {
    font-size: 5em;
    position: relative;
    top: 60px;
  }
  .atomicNumber {
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px;
  }
  .atomicWeight {
    position: absolute;
    bottom: 0px;
    width: 100%;
  }
  .name {
    position: absolute;
    bottom: 25px;
    width: 100%;
  }
  .properties {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .property {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 2px;
  }
`;

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
    const { AtomicNumber, AtomicMass, Abbreviation, Name } = this.props.featuredElement;
    return (
      <StyledElementPreview>
        <div className="preview">
          <div className="atomicNumber">
            {AtomicNumber}
          </div>
          <div className="atomicWeight">
            {AtomicMass}
          </div>
          <div className="symbol">
            {Abbreviation}
          </div>
          <div className="name">
            {Name}
          </div>
        </div>
        <div className="container">
          <div className="header">
            <PropertiesPanel properties={Object.getOwnPropertyNames(this.props.featuredElement)} />
          </div>
          <div className="property">
            {this.props.featuredElement[this.props.property]}
          </div>
        </div>
      </StyledElementPreview>
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
    AtomicNumber: PropTypes.int,
    Abbreviation: PropTypes.string,
    Name: PropTypes.string,
    AtomicMass: PropTypes.int,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ElementPreview);
