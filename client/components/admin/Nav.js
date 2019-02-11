import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <NavLink to="/admin">Admin Home</NavLink>
      <NavLink to="/admin/create-article" activeClassName="selected">
        Create Article
      </NavLink>
    </nav>
  )
}

export default Nav
