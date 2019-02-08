import React from 'react'
import {ArticleTags} from '../../components'

const Article = () => {
  return (
    <article>
      <header>
        <h1>#TITLE</h1>
        <time>#DATETIME</time>
        <ArticleTags />
      </header>
      #BODY
      <footer>Share Article</footer>
    </article>
  )
}

export default Article
