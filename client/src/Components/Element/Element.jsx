import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './Element.css';
import * as actions from '../../Actions/';

const ElementDiv = styled.div`
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
`;

class Element extends React.Component {
  handleClick = () => {
    this.props.actions.setFeaturedElement(this.props.Name);
  }
  handleHover = () => {
    this.props.actions.setFeaturedElement(this.props.Name);
  }

  render() {
    /* const blockStyle = styles[`block--${this.props.element.block}`]; */
    return (
      <Link className={styles.link} to={`/elements/${this.props.Name}`}>
        <ElementDiv color={this.props.color} onMouseEnter={this.handleHover}>
          {/* <div className={`${styles.block} ${blockStyle}`} onMouseEnter={this.handleHover}> */}
          <div className={styles.atomicNumber}>
            <div>
              {this.props.AtomicNumber}
            </div>
          </div>
          <div className={styles.symbol}>
            {this.props.Abbreviation}
          </div>
          <div className={styles.name}>
            {this.props.Name}
          </div>
          <div className={styles.mass}>
            {parseFloat(this.props.AtomicMass).toFixed(4).replace(/\.?0+$/, '')}
          </div>
          {/* </div> */}
        </ElementDiv>
      </Link>
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
