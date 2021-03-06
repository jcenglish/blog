import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {BlogView, HomeView, AdminView} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  // componentDidMount() {
  //   this.props.loadInitialData()
  // }

  render() {
    const {isLoggedIn} = this.props
    return (
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/blog" component={BlogView} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/admin" component={AdminView} />
          </Switch>
        )}
      </Switch>
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
