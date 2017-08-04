import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Element.css';
import * as actions from '../../Actions/';

class Element extends React.Component {
  handleClick = () => {
    this.props.actions.setFeaturedElement(this.props.element);
  }
  handleHover = () => {
    this.props.actions.setFeaturedElement(this.props.element);
  }

  render() {
    const blockStyle = styles[`block--${this.props.element.block}`];
    return (
      <Link className={styles.link} to={`/elements/${this.props.element.name.toLowerCase()}`}>
        <div className={`${styles.block} ${blockStyle}`} onMouseEnter={this.handleHover}>
          <div className={styles.atomicNumber}>
            <div>
              {this.props.element.number}
            </div>
          </div>
          <div className={styles.symbol}>
            {this.props.element.symbol}
          </div>
          <div className={styles.name}>
            {this.props.element.name}
          </div>
          <div className={styles.mass}>
            {parseFloat(this.props.element.weight).toFixed(4).replace(/\.?0+$/, '')}
          </div>
        </div>
      </Link>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

Element.propTypes = {
  element: PropTypes.shape({
    number: PropTypes.int,
    symbol: PropTypes.string,
    name: PropTypes.string,
    weight: PropTypes.int,
    block: PropTypes.string,
  }).isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Element);
