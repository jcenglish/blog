import React from 'react'
import {ArticleTags} from '../../components'

const Article = props => {
  const {article} = props
  const date = new Date(article.datePublished)
  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const y = date.getFullYear()
  const m = MONTHS[date.getMonth()]
  const d = date.getDate()

  return (
    <article>
      <header>
        <h1>{article.title}</h1>
        <time dateTime={article.datePublished}>{`${m} ${d}, ${y}`}</time>
      </header>
      {article.body}
    </article>
  )
}

export default Article
