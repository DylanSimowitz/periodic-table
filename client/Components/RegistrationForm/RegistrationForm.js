import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../Actions/';

class UserForm extends React.Component {
  constructor() {
    super()
  }
  handleChange = (e) => {
    this.props.actions.changeUser(e.target.value)
  }
  render() {
    return (
      <form>
        <label>Username:</label>
        <input type="text" value={this.props.name} onChange={(e) => this.props.actions.changeUser(e.target.value)}/>
        <label>Password:</label>
        <input type="password" />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
