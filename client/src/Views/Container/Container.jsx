import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import * as actions from '../../Actions/';

const Styles = styled.select`
  width: 100%;
`;

class Container extends React.Component {
  handleChange = (event) => {
    this.props.actions.selectTrend(event.target.value);
  }

  render() {
    return (
      <div>
        <Styles value={this.props.trend} onChange={this.handleChange}>
          <option value="Block">Block</option>
          <option value="Phase">Matter Phase</option>
        </Styles>
        {this.props.children}
      </div>
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

Container.propTypes = {
  trend: PropTypes.string.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  children: PropTypes.element.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
