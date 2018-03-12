import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import * as actions from '../../Actions/';
import Orbital from '../Orbital';
import Nucleus from '../Nucleus';
import Electron from '../Electron';


const StyledAtom = styled.svg`
  overflow: visible !important;
  width: 200px;
  height: 200px;
`;


class Atom extends React.Component {
  renderAtom = () => {
    const { ElectronCount } = this.props.featuredElement;
    const shells = [2, 8, 18, 32, 32, 18, 8];
    let shellConfiguration = [];
    shells.reduce((acc, num, i) => {
      const sum = acc + num;
      const remaining = sum - ElectronCount;
      if (remaining >= 0 && shellConfiguration.length === 0) {
        shellConfiguration = [i, num - remaining];
      }
      return sum;
    }, 0);
    const arr = shells.slice(0, shellConfiguration[0] + 1);
    arr.splice(shellConfiguration[0], 1, shellConfiguration[1]);
    return arr.map((shell, index) => {
      const electrons = [];
      for (let i = 0; i < shell; i += 1) {
        electrons.push(<Electron key={i} />);
      }
      return (
        <Orbital radius={20 + ((index + 1) * 15)} key={index}>
          {electrons}
        </Orbital>
      );
    });
  }
  render() {
    const { ElectronCount, Abbreviation } = this.props.featuredElement;
    if (ElectronCount) {
      return (
        <StyledAtom ref={(node) => { this.node = node; }}>
          {this.renderAtom()}
          <Nucleus element={Abbreviation} />
        </StyledAtom>
      );
    }
    return <div />;
  }
}

const mapStateToProps = state => ({
  elements: state.table.elements,
  featuredElement: state.table.featuredElement,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

Atom.propTypes = {
  featuredElement: PropTypes.shape({
    ElectronCount: PropTypes.number.isRequired,
    Abbreviation: PropTypes.string.isRequired,
  }).isRequired,
};

Atom.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Atom));
