import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import React from 'react';
import ElementPreview from '../../Components/ElementPreview';
import * as actions from '../../Actions/';

const ElementPage = props => (
  <ElementPreview element={props.params.element} />
);

const mapStateToProps = state => ({
  featuredElement: state.table.featuredElement,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

ElementPage.propTypes = {
  params: PropTypes.shape({
    element: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ElementPage);
