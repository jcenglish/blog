import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Admin Home</NavLink>
      <NavLink to="/create" activeClassName="selected">
        Create Article
      </NavLink>
      <NavLink to="/edit">Edit Article</NavLink>
    </nav>
  )
}

export default Nav
