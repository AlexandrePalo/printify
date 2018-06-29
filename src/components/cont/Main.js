import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Print from '../scenes/Print'
import Manual from '../scenes/Manual'
import State from '../cont/State'
import Header from '../cont/Header'
import Login from '../cont/Login'

const mapStateToProps = state => ({
  printing: state.print.begin,
  connected: state.status.connected,
  logged: state.login.logged
})

const mapDispatchToProps = dispatch => ({})

class Main extends Component {
  render() {
    if (!this.props.logged) {
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
          <Login />
        </div>
      )
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Main)
