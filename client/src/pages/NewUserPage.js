import React, { useCallback } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Header } from 'semantic-ui-react'
import { NewUserForm }  from '../components/UserForm/UserForm'
import config from '../config/deafult.json'

export default function AddNewStudentPage() {
  const history = useHistory();

  const onSubmit = useCallback(async values => {
    const result = await axios.post(`${config.serverUrl}/api/users/`, values)
    console.log(result)
    history.push('/users')
  },[])

  return (
    <div>
      <Header>New User:</Header>
      <NewUserForm onSubmit={onSubmit} action={'Add user'}/>
    </div>
  )
}
