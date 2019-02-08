import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
// const GOT_ARTICLE = 'GOT_ARTICLE'
const GOT_ARTICLES = 'GOT_ARTICLES'
const REQUESTED_ARTICLES = 'REQUESTED_ARTICLES'

/**
 * INITIAL STATE
 */
const initialState = {
  articles: [],
  isFetching: false
}

/**
 * ACTION CREATORS
 */
// const gotArticle = article => ({type: GOT_ARTICLE, article})
const gotArticles = articles => ({type: GOT_ARTICLES, articles})
const requestedArticles = () => ({type: REQUESTED_ARTICLES})

/**
 * THUNK CREATORS
 */
export const getArticlesPublished = () => dispatch => {
  dispatch(requestedArticles())
  try {
    axios.get('/api/blog/articles/published').then(res => {
      dispatch(gotArticles(res.data))
    })
  } catch (err) {
    console.error('Get articles did not succeed', err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    // case GOT_ARTICLE:
    //   return action.article
    case REQUESTED_ARTICLES:
      return {...state, isFetching: true}
    case GOT_ARTICLES:
      return {...state, articles: action.articles, isFetching: false}
    default:
      return state
  }
}
