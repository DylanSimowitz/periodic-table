import React from 'react';
import Group from '../Group';
import Series from '../Series';
import Element from '../Element';
import FeaturedElement from '../FeaturedElement';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../Actions/';

import styles from './PeriodicTable.css';


class PeriodicTable extends React.Component {
  constructor() {
    super()
    this.groups = []
    this.series = []
  }
  sortElements(elements) {
    this.sortElementsByGroup(elements)
    this.sortElementsBySeries(elements)
  }
  sortElementsByGroup(elements) {
    for (let i = 1; i<=18; i++) {
      this.groups[i] = elements.filter(element => {
        if (element.group === i) {
          return element
        }
      })
    }
  }
  sortElementsBySeries(elements) {
    this.series[0] = elements.filter(element => {
      if (element.number >= 57 && element.number <= 71) {
        return element;
      }
    })
    this.series[1] = elements.filter(element => {
      if (element.number >= 89 && element.number <= 103) {
        return element;
      }
    })
  }
  componentDidMount() {
    this.props.actions.fetchElements()
  }
  componentWillReceiveProps(nextProps) {
    this.sortElementsByGroup(nextProps.elements)
    this.sortElementsBySeries(nextProps.elements)
  }
  render() {
    return (
        <div className={styles.periodicTable}>
        {
          this.groups.map((group,groupNumber) => {
            let block;
            let groupElements = group.map(element => {
              block = element.block
              if (groupNumber === 3 && element.number > 40) {
                return;
              }
              return <Element element={element} key={element.number}/>
            })
            return (
              <Group key={groupNumber} block={block}>
                {groupElements}
              </Group>
            )
          })
        }
        {
          this.series.map((series,seriesNumber) => {
            let seriesName = ['Lanthanides','Actinides'];
            let seriesElements = series.map(element => {
              return <Element element={element} key={element.number}/>
            })
            return (
              <Series key={seriesNumber} name={seriesName[seriesNumber]}>
                {seriesElements}
              </Series>
            )
          })
        }
        <FeaturedElement element={this.props.featuredElement}/>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    elements: state.periodicTable.elements,
    featuredElement: state.periodicTable.featuredElement
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeriodicTable);
