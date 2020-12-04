import React from 'react'
import axios from 'axios';
import { Button } from 'semantic-ui-react'
import { reduxForm, Field } from 'redux-form'
import TextField from './TextField'
import './UserForm.scss'
import config from '../../config/deafult.json'

function UserForm({handleSubmit, valid, submitting, action}) {
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form__row'>
        <Field className='form__input' name='name' label='Name' component={TextField} placeholder='Ivan'></Field>
      </div>
      <div className='form__row'>
        <Field className='form__input' name='surname' label='Surname' component={TextField} placeholder='Ivanov'></Field>
      </div>
      <div className='form__row'>
        <Field className='form__input' name='dateOfBirthday' label='Date of birthday' component={TextField} placeholder='dd.mm.yyyy'></Field>
      </div>
      <div className='form__row'>
        <Field className='form__input' name='phone' label='Phone' component={TextField} placeholder=' 0XXYYYYYYY'></Field>
      </div>
      <div className='form__row'>
        <Field className='form__input' name='email' label='Email' component={TextField} placeholder='test@mail.com'></Field>
      </div>
      <Button type='submit' disabled={!valid && !submitting}>{action}</Button>
    </form>
  )
}

const validate = values => {
  const errors = {};
  if(!values.name){
    errors.name = 'Required'
  }
  if(!values.surname){
    errors.surname = 'Required'
  }
  const regDate = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
  if(!regDate.test(values.dateOfBirthday)) {
    errors.dateOfBirthday = 'Wrong date'
  }
  if(!values.dateOfBirthday){
    errors.dateOfBirthday = 'Required'
  }
  if(!values.phone){
    errors.phone = 'Required'
  }
  if(!values.email){
    errors.email = 'Required'
  }

  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!re.test(values.email)) {
    errors.email = 'Wrong email format!'
  }
  return errors
}

const asyncValidate = async values => {
  if (!values.email) return;
  const response = await axios.get(`${config.serverUrl}/api/users/is_exist?email=${values.email}`);
  if (response.data.is_exist) {
    throw { email: 'This email is already taken' }
  }
};

export const NewUserForm = reduxForm({
  form: "newUserForm",
  validate,
  asyncValidate,
  asyncBlurFields: ['email']
})(UserForm);

export const UpdateUserForm = reduxForm({
  form: "updateUserForm",
  validate
})(UserForm);
