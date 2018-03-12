import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as actions from '../../Actions';
import Block from './Block';
import Trend from '../Trend';
import Atom from '../Atom';

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

let Key = (props) => {
  const { className, ...rest } = props; // eslint-disable-line
  return (
    <div className={className}>
      <Trend />
      {/* <h1 style={{ margin: '0' }}>{props.trend.match(/[A-Z][a-z]+/g).join(' ')}</h1> */}
      <StyledDiv>
        <Block />
        {props.featuredElement.ElectronCount ? <Atom /> : <div />}
      </StyledDiv>
    </div>
  );
};

Key = styled(Key)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  position: absolute;
  left: 310px;
  height: 210px;
  width: 525px;
  ul {
    list-style: none;
  }
  @media (min-width: 800px) {
    left: 215px;
    width: 615px;
    height: 255px;
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
    ElectronCount: PropTypes.number,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Key);
