import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  margin-bottom: 43px;
`;

const Component = props => (
  <Group>
    {props.children}
  </Group>
);

Component.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Component;
