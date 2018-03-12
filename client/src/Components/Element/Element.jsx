import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as actions from '../../Actions/';

function trendStyles(props) {
  const largestRadius = 298;
  const AtomicRadius = props.AtomicRadius ? `${props.AtomicRadius.split(' ')[0]}0` : props.AtomicRadius;
  switch (props.trend) {
    case 'AtomicRadius':
      if (!AtomicRadius) {
        return `
          height: 60px;
          border: none;
          background-color: white;
          @media (min-width: 800px) {
            height: 70px;
          }
          .atomicNumber,
          .name,
          .mass {
            display: none;
          }
        `;
      }
      return `
        background-color: ${props.color};
        border-radius: 50%;
        height: 60px;
        transform: scale(${AtomicRadius / largestRadius});
        transition: transform 0.1s, color 0.1s, background-color 0.1s;
        @media (min-width: 800px) {
          height: 70px;
        }
        .atomicNumber,
        .name,
        .mass {
          display: none;
        }
      `;
    default:
      return '';
  }
}

export const StyledElement = styled.div`
  background-color: ${props => props.color};
  border: 1px solid black;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  user-select: none;
  font-size: 0.8em;
  &:hover {
    background-color: white;
    color: black;
  }
  ${props => trendStyles(props)}
  .atomicNumber {
    padding: 0 2px;
    font-size: 0.85em;
  }
  .symbol {
    font-size: 1.95em;
    text-align: center;
  }
  .name {
    font-size: 0.80em;
    text-align: center;
  }
  .label{
    font-size: 0.80em;
    text-align: center;
  }
  .mass {
    font-size: 0.85em;
    text-align: center;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 60px;
  height: 72px;
  margin: 1px;
  &:focus {
    outline: none;
  }
  &:hover {
    .element {
      transform: scale(1);
    }
  }
  @media (min-width: 800px) {
    width: 70px;
    height: 90px;
    font-size: 1em;
  }
`;

class Element extends React.Component {
  handleClick = () => {
    this.props.actions.setFeaturedElement(this.props.Name);
  }
  capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);
  handleHover = () => {
    this.props.actions.setFeaturedElement(this.props.Name);
  }

  render() {
    return (
      <StyledLink to={`/${this.props.Name}`} color={this.props.color} >
        <StyledElement className="element" color={this.props.color} onMouseEnter={this.handleHover} {...this.props}>
          <div className="atomicNumber">
            <div>
              {this.props.AtomicNumber}
            </div>
          </div>
          <div className="symbol">
            {this.props.Abbreviation}
          </div>
          <div className="name">
            {this.capitalize(this.props.Name)}
          </div>
          <div className="mass">
            {parseFloat(this.props.AtomicMass).toFixed(4).replace(/\.?0+$/, '')}
          </div>
        </StyledElement>
      </StyledLink>
    );
  }
}

const mapStateToProps = state => ({
  trend: state.table.trend,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

Element.propTypes = {
  AtomicNumber: PropTypes.number.isRequired,
  Abbreviation: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  AtomicMass: PropTypes.string.isRequired,
  /* Block: PropTypes.string.isRequired, */
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  color: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Element);
