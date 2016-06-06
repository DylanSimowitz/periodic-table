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
  }
  sortElementsByGroup(elements) {
    for (let i = 1; i<=32; i++) {
      this.groups[i] = elements.filter(element => {
        return element['Group'] === i
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
          this.groups.map((group,item) => {
            let groupElements = group.map(element => {
              return <Element element={element} key={element['Atomic Number']}/>
            })

            return (
              <Group key={item}>
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
