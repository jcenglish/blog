import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <NavLink to="/blog" activeClassName="selected">
        Blog
      </NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/resources">Resources</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}

export default Nav
