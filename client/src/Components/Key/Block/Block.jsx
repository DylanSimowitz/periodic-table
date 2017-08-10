import { connect } from 'react-redux';
import styled, { withTheme } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const KeyItem = styled.li`
  display: flex;
  align-items: center;
  &:before {
    content: '';
    background-color: ${props => props.color};
    height: 32px;
    width: 32px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    margin-bottom: 4px;
  }
`;

const Block = props => (
  <ul {...props}>
    {
      Object.keys(props.theme.trend[props.trend]).map(key => (
        <KeyItem color={props.theme.trend[props.trend][key]}>{`${key}`}</KeyItem>
      ))
    }
  </ul>
);

Block.propTypes = {
  theme: PropTypes.shape({
    trend: PropTypes.object,
  }).isRequired,
  trend: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ trend: state.table.trend });

export default connect(mapStateToProps)(withTheme(Block));
