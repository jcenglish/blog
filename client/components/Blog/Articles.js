import React from 'react'
import {connect} from 'react-redux'
import {getArticles} from '../../store'
import {Article} from '../../components'

class Articles extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    this.props.getArticles()
    console.log('COMPONENT DID MOUNT', this.props.articles)
  }

  render() {
    const {articles, isFetching} = this.props

    if (isFetching) {
      return <div>loading</div>
    } else {
      return (
        <div>
          {articles.map(article => (
            <Article article={article} key={article._id} />
          ))}
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  console.log('state', state)
  const {articles, isFetching} = state.blog
  return {
    articles,
    isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getArticles: () => dispatch(getArticles())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles)
