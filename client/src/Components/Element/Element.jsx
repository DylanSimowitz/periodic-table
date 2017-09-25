import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as actions from '../../Actions/';

export const ElementDiv = styled.div`
  background-color: ${props => props.color};
  border: 1px solid black;
  margin: 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  user-select: none;
  width: 60px;
  height: 72px;
  font-size: 0.8em;
  &:hover {
    background-color: white;
  }
  @media (min-width: 800px) {
    width: 70px;
    height: 90px;
    font-size: 1em;
  }
  .atomicNumber {
    padding: 0 2px;
    font-size: 0.75em;
  }
  .symbol {
    font-size: 1.75em;
    text-align: center;
  }
  .name {
    font-size: 0.60em;
    text-align: center;
  }
  .mass {
    font-size: 0.75em;
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

class Element extends React.Component {
  handleClick = () => {
    this.props.actions.setFeaturedElement(this.props.Name);
  }
  handleHover = () => {
    this.props.actions.setFeaturedElement(this.props.Name);
  }

  render() {
    return (
      <StyledLink to={`/elements/${this.props.Name}`}>
        <ElementDiv color={this.props.color} onMouseEnter={this.handleHover}>
          <div className="atomicNumber">
            <div>
              {this.props.AtomicNumber}
            </div>
          </div>
          <div className="symbol">
            {this.props.Abbreviation}
          </div>
          <div className="name">
            {this.props.Name}
          </div>
          <div className="mass">
            {parseFloat(this.props.AtomicMass).toFixed(4).replace(/\.?0+$/, '')}
          </div>
          {/* </div> */}
        </ElementDiv>
      </StyledLink>
    );
  }
}

const mapStateToProps = () => ({
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
