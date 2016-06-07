import React from 'react';
import Group from '../Group';
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
    this.actinides = {
      start: 89,
      end: 103
    }
    this.lanthanides = {
      start: 57,
      end: 71
    }
  }
  sortElementsByGroup(elements) {
    for (let i = 1; i<=18; i++) {
      this.groups[i] = elements.filter(element => {
        if (element.group === i && element.block !== 'f') {
          return element
        }
      })
    }
  }
  componentDidMount() {
    this.props.actions.fetchElements()
  }
  componentWillReceiveProps(nextProps) {
    this.sortElementsByGroup(nextProps.elements)
  }
  render() {
    return (
        <div className={styles.periodicTable}>
        {
          this.groups.map((group,groupNumber) => {
            let block;
            let groupElements = group.map(element => {
              block = element.block
              return <Element element={element} key={element.number}/>
            })
            return (
              <Group key={groupNumber} block={block}>
                {groupElements}
              </Group>
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
