import { arc } from 'd3-shape';
import styled, { keyframes } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const rotate360cw = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;
const rotate360ccw = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(-360deg);
}
`;
const StyledOrbital = styled.g`
  transform-origin: center;
  animation: ${props => props.rotation ? rotate360cw : rotate360ccw} 18s linear infinite;
`;

class Orbital extends React.Component {
  componentDidMount() {
    this.forceUpdate();
  }
  toggleAnimate = () => {
    this.setState({
      animated: !this.state.animated,
    });
  }
  electronPosition = (electron) => {
    const distance =
      (this.orbital.getTotalLength() / (React.Children.count(this.props.children) * 2)) * electron;
    return this.orbital.getPointAtLength(distance);
  }
  renderElectrons = () => {
    const childrenWithProps = React.Children.map(this.props.children, (child, index) =>
      React.cloneElement(child, { position: this.electronPosition(index) }));
    return childrenWithProps;
  }
  render() {
    const { radius } = this.props;
    const d = arc()({
      innerRadius: radius,
      outerRadius: radius + 1,
      startAngle: 0,
      endAngle: Math.PI * 2,
    });
    return (
      <StyledOrbital ref={(node) => { this.node = node; }} rotation={Math.random() < 0.5}>
        <path ref={(node) => { this.orbital = node; }} d={d} stroke="black" strokeWidth={2} transform="translate(100,100)" />
        {this.orbital ? this.renderElectrons() : <div />}
      </StyledOrbital>
    );
  }
}

Orbital.propTypes = {
  radius: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

Orbital.defaultProps = {
};

export default Orbital;
