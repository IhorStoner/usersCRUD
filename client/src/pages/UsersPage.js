import React, { useEffect, useState } from 'react'
import { fetchUsers, removeUser } from '../redux/actions/usersAction'
import { getUsers,getUsersLoading } from '../redux/selectors/usersSelector'
import { List, Image, Button,Pagination } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import DimmerLoader from '../components/Loader/Loader';

export default function Users() {
  const users = useSelector(getUsers);
  const loading = useSelector(getUsersLoading);
  const usersList = _.chunk(users, 10);
  const [ currentPage, setCurrentPage ] = useState(1)
  const dispatch = useDispatch();  
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <Pagination 
        defaultActivePage={currentPage} 
        firstItem={null} 
        lastItem={null} 
        pointing secondary 
        totalPages={Math.ceil(users.length/10)} 
        onClick={(e) => setCurrentPage(e.target.getAttribute('value'))}
      />
      <List divided verticalAlign='middle'>
        <DimmerLoader active={loading}/>
        {usersList.length > 0 && usersList[currentPage - 1].map(user => (
          <List.Item >
            <List.Content floated='right'>
              <Link to={`/users/updateUser/${user._id}`}>
                <Button>Update</Button>
              </Link>
              <Button onClick={() => dispatch(removeUser(user._id))}>Delete</Button>
            </List.Content>
            <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
            <List.Header>Name: {user.name}</List.Header>
            <List.Content>Surname: {user.surname}</List.Content>
            <List.Content>Date of birthday: {user.dateOfBirthday}</List.Content>
            <List.Content>Phone: {user.phone}</List.Content>
            <List.Content>Email: {user.email}</List.Content>
          </List.Item>
        ))}
      </List>

    </div>
  )
}
