import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Series = styled.div`
  display: flex
`;

const Component = props => (
  <Series>
    {props.children}
  </Series>
);

Component.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Component;
