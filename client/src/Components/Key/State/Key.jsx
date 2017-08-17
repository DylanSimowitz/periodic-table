import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
/* import styles from './Key.css'; */
import * as actions from '../../Actions/';

const KeyItem = styled.li`
  display: flex;
  align-items: center;
  &:before {
    content: '${props => props.block}';
    background-color: ${props => props.theme.block[props.block]};
    height: 40px;
    width: 40px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    margin-bottom: 2px;
  }
`;


let Key = (props) => {
  switch (props.trend) {
    case 'block':
      return (
        <div {...props}>
          <div>
            <h1>Block</h1>
          </div>
          <ul>
            <KeyItem block="s" />
            <KeyItem block="d" />
            <KeyItem block="p" />
            <KeyItem block="f" />
          </ul>
        </div>
      );
    case 'phase':
      return (
        <div {...props}>
          <div>
            <h1>State</h1>
          </div>
          <ul>
            <KeyItem block="s">Solid</KeyItem>
            <KeyItem block="d">Liquid</KeyItem>
            <KeyItem block="p">Gas</KeyItem>
            <KeyItem block="f">Unknown</KeyItem>
          </ul>
        </div>
      );
    default:
      break;
  }
  return false;
};

Key = styled(Key)`
  box-sizing: border-box;
  border: 1px solid black;
  position: absolute;
  left: 175px;
  height: 265px;
  width: 695px;
  ul {
    list-style: none;
  }
`;


const mapStateToProps = state => ({
  trend: state.table.trend,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

Key.propTypes = {
  /* element: PropTypes.shape({
   *   number: PropTypes.int,
   *   symbol: PropTypes.string,
   *   name: PropTypes.string,
   *   weight: PropTypes.int,
   *   block: PropTypes.string,
   * }).isRequired, */
  /* actions: PropTypes.objectOf(PropTypes.func).isRequired, */
  trend: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Key);
