import React from 'react'
import {ArticleTags} from '../../components'

const Article = props => {
  const {article} = props
  return (
    <article>
      <header>
        <h1>{article.title}</h1>
        <time>{article.datePublished}</time>
        <ArticleTags tags={article.tags} />
      </header>
      {article.body}
      <footer>Share Article</footer>
    </article>
  )
}

export default Article
