import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import Group from '../Group';
import Series from '../Series';
import Element from '../Element';
import Key from '../Key';
import ElementPlaceholder from '../ElementPlaceholder';
import * as actions from '../../Actions/';

const StyledPeriodicTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1332px;
  justify-content: center;
  margin: 15px auto;
  position: relative;
`;


class PeriodicTable extends React.Component {
  constructor() {
    super();
    this.groups = [];
    this.series = [];
  }
  componentDidMount() {
    this.props.actions.fetchElements();
  }
  componentWillReceiveProps(nextProps) {
    this.sortElements(nextProps.elements);
  }
  sortElements(elements) {
    this.sortElementsByGroup(elements);
    this.sortElementsBySeries(elements);
  }
  sortElementsByGroup(elements) {
    for (let i = 1; i <= 18; i += 1) {
      this.groups[i] = Object.keys(elements).filter((element) => {
        if (elements[element].Group === i) {
          return elements[element];
        }
        return false;
      });
    }
  }
  sortElementsBySeries(elements) {
    for (let i = 0; i < 2; i += 1) {
      this.series[i] = Object.keys(elements).filter((element) => {
        const atomicnumber = elements[element].AtomicNumber;
        if (i === 0 && atomicnumber >= 57 && atomicnumber <= 71) {
          return elements[element];
        }
        if (i === 1 && atomicnumber >= 89 && atomicnumber <= 103) {
          return elements[element];
        }
        return false;
      });
    }
  }
  elementColor(element) {
    let property;
    switch (this.props.trend) {
      case 'Phase':
        property = 'Phase';
        break;
      default:
        property = this.props.trend;
        break;
    }
    let elementProperty = element[property];
    if (elementProperty === null) {
      elementProperty = 'unknown';
    }
    const color = this.props.theme.trend[this.props.trend][elementProperty]; // eslint-disable-line
    return color;
  }
  render() {
    return (
      <StyledPeriodicTable>
        <Key />
        {
          this.groups.map((group, groupNumber) => {
            let block;
            const groupElements = group.map((element) => {
              block = element.Block;
              if (element.category === 8 || element.category === 9) {
                return false;
              }
              const { Abbreviation, AtomicNumber, AtomicMass, Name } = this.props.elements[element];
              return <Element Abbreviation={Abbreviation} AtomicNumber={AtomicNumber} AtomicMass={AtomicMass} Name={Name} key={AtomicNumber} color={this.elementColor(this.props.elements[element])} />; // eslint-disable-line
            });
            if (groupNumber === 3) {
              groupElements.pop();
              groupElements.pop();
              groupElements.push(<ElementPlaceholder key="Lanthanides" label="Lanthanides" range="57-71" />, <ElementPlaceholder key="Actinides" label="Actinides" range="89-103" />);
            }
            return ( //eslint-disable-next-line
              <Group key={groupNumber} block={block}>
                {groupElements}
              </Group>
            );
          })
        }
        {
          this.series.map((series, seriesNumber) => {
            const seriesName = ['Lanthanides', 'Actinides'];
            const seriesElements = series.map((element) => {
              const { Abbreviation, AtomicNumber, AtomicMass, Name } = this.props.elements[element];
              return <Element Abbreviation={Abbreviation} AtomicNumber={AtomicNumber} AtomicMass={AtomicMass} Name={Name} key={AtomicNumber} color={this.elementColor(this.props.elements[element])} />; // eslint-disable-line
            });
            return ( //eslint-disable-next-line
              <Series key={seriesNumber} name={seriesName[seriesNumber]}>
                {seriesElements}
              </Series>
            );
          })
        }
        {this.props.children}
      </StyledPeriodicTable>
    );
  }
}

const mapStateToProps = state => ({
  elements: state.table.elements,
  featuredElement: state.table.featuredElement,
  trend: state.table.trend,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

PeriodicTable.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  children: PropTypes.element,
  elements: PropTypes.shape({
    element: PropTypes.object,
  }).isRequired,
  trend: PropTypes.string.isRequired,
};

PeriodicTable.defaultProps = {
  children: <div></div>,
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(PeriodicTable));
