import { combineReducers } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'
import usersReducer from './reducers/usersReducer'

export default combineReducers({
  users: usersReducer,
  form: formReducer
})