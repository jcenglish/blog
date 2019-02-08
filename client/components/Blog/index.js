import React from 'react'
import {SearchBar, Pagination, Tags, Articles} from '../../components'

class BlogView extends React.Component {
  render() {
    return (
      <main>
        <h1>Blog</h1>
        <Articles />
      </main>
    )
  }
}

export default BlogView
