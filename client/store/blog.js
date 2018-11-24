import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GOT_POST = 'GOT_POST'

/**
 * INITIAL STATE
 */
const initialState = {}

/**
 * ACTION CREATORS
 */
const gotPost = post => ({type: GOT_POST, post})

/**
 * THUNK CREATORS
 */
export const getPost = postId => async dispatch => {
  try {
    await axios.get(`/blog/${postId}`)
    dispatch(gotPost())
    history.push('/')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_POST:
      return action.post
    default:
      return state
  }
}
