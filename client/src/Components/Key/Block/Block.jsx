import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const KeyItem = styled.li`
  display: flex;
  align-items: center;
  &:before {
    content: '${props => props.block}';
    background-color: ${props => props.theme.block[props.block]};
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    margin-bottom: 2px;
  }
`;

const Block = props => (
  <ul {...props}>
    <KeyItem block="s" />
    <KeyItem block="p" />
    <KeyItem block="d" />
    <KeyItem block="f" />
  </ul>
);

KeyItem.propTypes = {
  block: PropTypes.string.isRequired,
};

export default Block;
