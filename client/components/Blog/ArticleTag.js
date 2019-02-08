import React from 'react'

const ArticleTag = props => {
  const {tag} = props
  return <div>{tag.name}</div>
}

export default ArticleTag
