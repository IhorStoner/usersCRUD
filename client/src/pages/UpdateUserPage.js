import React, { useCallback } from 'react'
import axios from 'axios'
import { useHistory,useParams } from 'react-router-dom'
import { Header } from 'semantic-ui-react'
import { UpdateUserForm }  from '../components/UserForm/UserForm'

export default function AddNewStudentPage() {
  const { userId } = useParams()
  const history = useHistory();

  const onSubmit = useCallback(async values => {
    try {
      await axios.put(`http://localhost:5000/api/users/${userId}`, values)
      history.push('/users')
    } catch (e) {
      console.log(e)
    }
    
  },[])

  return (
    <div>
      <Header>Update User:</Header>
      <UpdateUserForm onSubmit={onSubmit} action={'Update User'}/>
    </div>
  )
}
