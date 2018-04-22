import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'

import validate from '../helpers/validate'
import { RadioButton } from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton'
import { MenuItem } from 'material-ui'
import SendIcon from './SendIcon'
import {
  renderTextField,
  renderSelectField,
  renderRadioGroup,
  renderCheckbox } from './RenderField'

const styles = {
  field: {
    width: '100%',
    fontSize: '1.2em'
  },
  button: {
    margin: 12
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  }
}

const SingInForm = ({
  handleSubmit,
  pristine,
  submitting,
  reset
}) => (
  <form onSubmit={handleSubmit} className='form'>
    <div className='field'>
      <Field
        name='firstName'
        component={renderTextField}
        label='First Name'
        style={styles.field}
      />
    </div>

    <div className='field'>
      <Field
        name='lastName'
        component={renderTextField}
        label='Last Name'
        style={styles.field}
      />
    </div>

    <div className='field'>
      <Field
        name='email'
        component={renderTextField}
        label='Email'
        style={styles.field}
      />
    </div>

    <div className='field'>
      <Field
        name='skill'
        component={renderSelectField}
        label='Skill'
        style={styles.field}
      >
        <MenuItem value='beginner' primaryText='Beginner Dev' />
        <MenuItem value='intermediate' primaryText='Intermediate Dev' />
        <MenuItem value='expert' primaryText='Expert Dev' />
      </Field>
    </div>

    <div className='field'>
      <Field name='sex' component={renderRadioGroup}>
        <RadioButton value='male' label='Male' />
        <RadioButton value='female' label='Female' />
      </Field>
    </div>

    <div className='field'>
      <Field
        name='age'
        component={renderTextField}
        label='Age'
        style={styles.field}
      />
    </div>

    <div className='field'>
      <Field
        name='saveDetails'
        component={renderCheckbox}
        label='Save Details'
      />
    </div>

    <div className='field'>
      <Field
        name='message'
        component={renderTextField}
        label='Message'
        multiline='true'
        rows={2}
        style={styles.field}
      />
    </div>

    <div className='field'>
      <RaisedButton
        label='SEND'
        primary
        labelPosition='after'
        style={styles.button}
        containerElement='label'
        disabled={pristine || submitting}
        icon={<SendIcon />}
      >
        <input type='submit' style={styles.exampleImageInput} />
      </RaisedButton>
      <RaisedButton
        label='Clear Values'
        style={styles.button}
        onClick={reset}
        disabled={pristine || submitting}
      />
    </div>

  </form>
)

SingInForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool
}

export default reduxForm({
  form: 'singIn',
  validate
})(SingInForm)
