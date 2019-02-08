import React from 'react'
import {ArticleTag} from '../../components'

const ArticleTags = props => {
  const {tags} = props
  return (
    <div>
      Article Tags:
      {tags.map(tag => (
        <ArticleTag tag={tag} key={tag.name} />
      ))}
    </div>
  )
}

export default ArticleTags
