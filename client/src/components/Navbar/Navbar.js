import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [ activeItem, setActiveItem ] = useState('users')

  return (
    <div>
        <Menu pointing secondary>
          <NavLink to='/users'>
            <Menu.Item
              name='users'
              active={activeItem === 'students'}
              onClick={() => setActiveItem('students')}
            />
          </NavLink>
          <NavLink to='/users/newUser'>
            <Menu.Item
              name='new User'
              active={activeItem === 'newUser'}
              onClick={() => setActiveItem('newUser')}
            />
          </NavLink>
        </Menu>
    </div>
  )
}
