import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import NotFoundPage from "./pages/NotFoundPage"
import Users from './pages/UsersPage'
import NewUserPage from './pages/NewUserPage'
import UpdateUserPage from './pages/UpdateUserPage'

export default function Routes() {

  return (
    <Switch>
      <Route path="/users" exact>
        <Users></Users>
      </Route>
      <Route path='/users/newUser' component={NewUserPage}/>
      <Route path='/users/updateUser/:userId' component={UpdateUserPage}/>
      <Redirect to='/users'/>
      <Route path='*' component={NotFoundPage}/>
    </Switch>
  )
}