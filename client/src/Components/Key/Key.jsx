import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as actions from '../../Actions/';
import Block from './Block';

/* function trendKey(trend) {
 *   switch (trend) {
 *     case 'block':
 *       return <Block />;
 *     default:
 *       return <div />;
 *   }
 * }
 * */
let Key = (props) => {
  const { className, ...rest } = props; // eslint-disable-line
  return (
    <div className={className}>
      <div>
        <h1>{props.trend}</h1>
      </div>
      <Block />
      <div>
        {props.featuredElement.electronConfiguration}
      </div>
    </div>
  );
};
Key = styled(Key)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
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
  featuredElement: state.table.featuredElement,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

Key.propTypes = {
  trend: PropTypes.string.isRequired,
  featuredElement: PropTypes.shape({
    electronConfiguration: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Key);
