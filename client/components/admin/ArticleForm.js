import React from 'react'
import {connect} from 'react-redux'
import {createArticle} from '../../store'

class ArticleForm extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const formName = event.target.name
    const {title, body} = this.state

    switch (formName) {
      case 'create': {
        this.props.createArticle(title, body)
        break
      }
      case 'edit': {
        this.props.editArticle(title, body)
        break
      }
      default:
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    const {displayName, handleSubmit, handleChange} = this.props
    return (
      <>
        <h1>{displayName} Article</h1>
        <form onSubmit={handleSubmit()} name={name}>
          <label>Title</label>
          <input
            required
            type="text"
            name="title"
            onChange={handleChange}
            value={this.state.title}
          />
          <label>Body</label>
          <input
            required
            type="text"
            name="body"
            onChange={handleChange}
            value={this.state.body}
          />
          <button type="submit">{displayName} Article</button>
        </form>
      </>
    )
  }
}

// const mapEdit = state => {
//   return {
//     name: 'edit',
//     displayName: 'Save'
//   }
// }

const mapCreate = state => {
  return {
    name: 'create',
    displayName: 'Create'
  }
}

const mapDispatchToProps = dispatch => ({
  createArticle: (title, body) => dispatch(createArticle(title, body))
})

// export const Edit = connect(
//   mapEdit,
//   mapDispatchToProps
// )(ArticleForm)
export const Create = connect(
  mapCreate,
  mapDispatchToProps
)(ArticleForm)
