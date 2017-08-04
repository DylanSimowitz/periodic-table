import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import React from 'react';
import * as actions from '../../Actions/';

const Container = props => (
  <div>
    <h1>hello</h1>
    {props.children}
  </div>
);

const mapStateToProps = state => ({
  featuredElement: state.table.featuredElement,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
