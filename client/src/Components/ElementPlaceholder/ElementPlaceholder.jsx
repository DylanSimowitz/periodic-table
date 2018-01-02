import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyledElement, StyledLink } from '../Element';
import * as actions from '../../Actions';

class ElementPlaceholder extends React.PureComponent {
  handleMouseEnter = () => {
    this.props.actions.setFeaturedSeries(this.props.label);
  }
  handleMouseLeave = () => {
    this.props.actions.setFeaturedSeries('');
  }
  render() {
    return (
      <StyledLink to="/">
        <StyledElement {...this.props} onMouseOver={this.handleMouseEnter} onMouseOut={this.handleMouseLeave}>
          <div className="label">
            {this.props.label}
            <br />
            [{this.props.range}]
          </div>
        </StyledElement>
      </StyledLink>
    );
  }
}

ElementPlaceholder.propTypes = {
  label: PropTypes.string,
  range: PropTypes.string,
};

ElementPlaceholder.defaultProps = {
  label: 'label',
  range: 'range',
};

const mapStateToProps = state => ({
  trend: state.table.trend,
  featuredSeries: state.table.featuredSeries,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ElementPlaceholder);
