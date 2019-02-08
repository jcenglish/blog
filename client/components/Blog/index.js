import React from 'react'
import {SearchBar, Pagination, Tags, Articles} from '../../components'
import {connect} from 'react-redux'
import {getArticles} from '../../store'

class BlogView extends React.Component {
  render() {
    return (
      <main>
        <h1>Blog</h1>
        <SearchBar />
        <Tags />
        <Articles />
        <Pagination />
      </main>
    )
  }
}

export default BlogView
