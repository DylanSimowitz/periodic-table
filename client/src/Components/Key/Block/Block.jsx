import { connect } from 'react-redux';
import { withTheme } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import KeyItem from '../KeyItem';

const Block = (props) => {
  const { className, ...rest } = props; // eslint-disable-line
  return (
    <ul className={className}>
      {
        Object.keys(props.theme.present.trend[props.trend]).map(key => (
          <KeyItem color={props.theme.present.trend[props.trend][key]} key={key} label={key} />
        ))
      }
    </ul>
  );
};
Block.propTypes = {
  theme: PropTypes.shape({
    trend: PropTypes.object,
  }).isRequired,
  trend: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ trend: state.table.trend });

export default connect(mapStateToProps)(withTheme(Block));
