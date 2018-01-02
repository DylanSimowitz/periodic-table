import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import ElementPreview from '../../Components/ElementPreview';
import * as actions from '../../Actions/';

const StyledElementPage = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  position: absolute;
  top: 0;
  left: 0;
`;

const ElementPage = props => (
  <Modal isOpen onRequestClose={() => props.history.push('/')}>
    <ElementPreview element={props.match.params.element} />
  </Modal>
);

const mapStateToProps = state => ({
  featuredElement: state.table.featuredElement,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

ElementPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.function,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      element: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ElementPage);
