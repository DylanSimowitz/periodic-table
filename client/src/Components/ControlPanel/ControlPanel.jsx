import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ControlPanel.css';
import * as actions from '../../Actions/';

class ControlPanel extends React.Component {
  handleClick = () => {
    this.props.actions.setFeaturedElement(this.props.element);
  }

  render() {
    return (
      <div className="a">
      </div>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

ControlPanel.propTypes = {
  element: PropTypes.shape({
    number: PropTypes.int,
    symbol: PropTypes.string,
    name: PropTypes.string,
    weight: PropTypes.int,
    block: PropTypes.string,
  }).isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
