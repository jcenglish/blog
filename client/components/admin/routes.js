import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {AdminView, CreateArticle, Login} from '../../components'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    const {isLoggedIn} = this.props
    return (
      isLoggedIn && (
        <Switch>
          <Route path="/admin/" component={AdminView} />
          <Route path="/admin/create-article" component={CreateArticle} />
          <Route component={Login} />
        </Switch>
      )
    )
  }
}

/**
 * CONTAINER
 */
const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me())
//     }
//   }
// }

export default withRouter(connect(mapStateToProps)(Routes))
