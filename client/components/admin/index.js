import React, {Fragment} from 'react'
import {AdminNav} from '../../components'
import Routes from './routes'
class BlogView extends React.Component {
  render() {
    return (
      <>
        <AdminNav />
        <Routes />
      </>
    )
  }
}

export default BlogView
