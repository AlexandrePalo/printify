import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Print from '../scenes/Print'
import Manual from '../scenes/Manual'
import State from '../cont/State'
import Header from '../cont/Header'
import Login from '../cont/Login'
import { reLogin } from '../../redux/actions/login'
import background from '../../img/craft_monochrome_old.jpg'

const mapStateToProps = state => ({
  printing: state.print.begin,
  connected: state.status.connected,
  logged: state.login.logged,
  session: state.login.session
})

const mapDispatchToProps = dispatch => ({
  reLogin: token => dispatch(reLogin(token))
})

class Main extends Component {
  componentWillMount() {
    // Session but not logged --> relogin needed
    if (this.props.session && !this.props.logged) {
      this.props.reLogin(sessionStorage.jwt)
    }
  }

  render() {
    // Session but not logged --> relogin ongoing
    if (this.props.session && !this.props.logged) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <h1>Loading reloading</h1>
        </div>
      )
    }

    // No session and not logged --> login form
    if (!this.props.session && !this.props.logged) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: 'url(' + background + ')',
            backgroundPosition: 'center top',
            backgroundSize: '100% auto'
          }}
        >
          <Login />
        </div>
      )
    }

    // Session and logged
    if (this.props.session && this.props.logged) {
      if (!this.props.connected) {
        return (
          <Fragment>
            <Header />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '90%',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <State />
            </div>
          </Fragment>
        )
      } else {
        if (this.props.printing) {
          return <Print />
        } else {
          return <Manual />
        }
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
