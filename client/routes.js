import React, {Component} from 'react'
// import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {BlogView, HomeView} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  // componentDidMount() {
  //   this.props.loadInitialData()
  // }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/blog" component={BlogView} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
// const mapStateToProps = state => {
//   return {
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me())
//     }
//   }
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes))
export default withRouter(Routes)
