import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GroupLabel from './Label'

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  margin-bottom: 43px;
`;

const Group = props => (
  <StyledGroup {...props}>
    <GroupLabel group={props.group} />
    {props.children}
  </StyledGroup>
);

Group.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
  group: PropTypes.number.isRequired,
};

export default Group;
