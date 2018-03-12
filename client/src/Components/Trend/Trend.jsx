import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import * as actions from '../../Actions/';

const StyledSelect = styled.select`
  width: 100%;
  height: 40px;
  border-radius: 0px;
`;

class Trend extends React.Component {
  handleChange = (event) => {
    this.props.actions.selectTrend(event.target.value);
  }

  render() {
    return (
      <StyledSelect value={this.props.trend} onChange={this.handleChange}>
        <option value="Block">Block</option>
        <option value="Phase">Phase</option>
        <option value="AtomicRadius">Atomic Radius</option>
      </StyledSelect>
    );
  }
}

const mapStateToProps = state => ({
  featuredElement: state.table.featuredElement,
  trend: state.table.trend,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

Trend.propTypes = {
  trend: PropTypes.string.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Trend);
