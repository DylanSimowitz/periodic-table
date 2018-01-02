import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const Theme = props => (
  <ThemeProvider theme={props.theme}>
    {props.children}
  </ThemeProvider>
);

Theme.propTypes = {
  theme: PropTypes.shape({
  }).isRequired,
  children: PropTypes.element.isRequired,
};

const mapStateToProps = state => ({
  theme: state.theme,
});

export default connect(mapStateToProps)(Theme);
