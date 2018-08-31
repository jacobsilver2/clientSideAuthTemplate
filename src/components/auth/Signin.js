import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/index'

class Signin extends Component {
  state = {  }

  

  onSubmit = (formProps) => {
    this.props.signin(formProps, () => {
      this.props.history.push('/feature')
    });
  }

  render() {

    //! handleSubmit comes as props thanks to redux form
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field 
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field 
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign In</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' })
)(Signin)

// export default reduxForm({ form: 'signup' })(Signin);