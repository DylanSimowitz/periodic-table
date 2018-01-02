import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../Actions';

const StyledLabel = styled.div`
  text-align: center;
  user-select: none;
`;

class GroupLabel extends React.Component {
  handleMouseEnter = () => {
    this.props.actions.setFeaturedGroup(this.props.group);
  }
  handleMouseLeave = () => {
    this.props.actions.setFeaturedGroup('');
  }
  render() {
    const { group } = this.props;
    return (
      <StyledLabel onMouseOver={this.handleMouseEnter} onMouseOut={this.handleMouseLeave}>
        {group}
      </StyledLabel>
    );
  }
}

GroupLabel.propTypes = {
  group: PropTypes.number.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

const mapStateToProps = state => ({
  featuredElement: state.table.featuredElement,
  property: state.table.selectedProperty,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupLabel);
