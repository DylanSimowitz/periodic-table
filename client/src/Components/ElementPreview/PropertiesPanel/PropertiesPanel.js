import React, {Component} from 'react'
import styles from './PropertiesPanel.css'
import {selectProperty} from '../../../Actions'
import { connect } from 'react-redux'

class PropertiesPanel extends Component {

  handleChange = (event) => {
    this.props.selectProperty(event.target.value)
  }

  render() {
    const {properties} = this.props
    return(
      <div className={styles.panel}>
        <span>Property:</span>
        <select onChange={this.handleChange} value={this.props.selectedProperty}> 
          {
            Object.keys(properties).map((property, index) => {
              return <option value={property} key={index}>{property}</option>
            })
          }
        </select>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {selectedProperty: state.periodicTable.selectedProperty}
}

export default connect(mapStateToProps, {selectProperty})(PropertiesPanel)
