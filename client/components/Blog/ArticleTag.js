import React from 'react'

const ArticleTag = props => {
  const {tag} = props
  return <span>{tag.name}</span>
}

export default ArticleTag
