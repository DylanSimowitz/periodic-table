import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { ActionCreators } from 'redux-undo';
import * as actions from '../../../Actions/';

const StyledKeyItem = styled.li`
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

class KeyItem extends React.Component {
  handleEnter = () => {
    this.props.actions.setFeaturedKeyItem(this.props.label);
  }
  handleLeave = () => {
    /* this.props.actions.setFeaturedKeyItem('');*/
    this.props.undoable.undo();
  }
  render() {
    const { color, label } = this.props;
    return (
      <StyledKeyItem color={color} onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
        {label}
      </StyledKeyItem>
    );
  }
}

KeyItem.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
  undoable: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(KeyItem);
