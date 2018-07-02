import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import Print from '../scenes/Print'
import Manual from '../scenes/Manual'
import State from '../cont/State'
import Header from '../cont/Header'
import Login from '../cont/Login'
import { reLogin } from '../../redux/actions/login'
import { amendError } from '../../redux/actions/errors'
import background from '../../img/craft_monochrome_old.jpg'

const mapStateToProps = state => ({
  printing: state.print.begin,
  connected: state.status.connected,
  logged: state.login.logged,
  session: state.login.session,
  errors: state.errors
})

const mapDispatchToProps = dispatch => ({
  reLogin: token => dispatch(reLogin(token)),
  amendError: (event, reason) => dispatch(amendError(event, reason))
})

class Main extends Component {
  componentWillMount() {
    // Session but not logged --> relogin needed
    if (this.props.session && !this.props.logged) {
      this.props.reLogin(sessionStorage.jwt)
    }
  }

  renderContent() {
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

  renderErrorSnackBar() {
    return (
      <Snackbar
        variant="error"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={this.props.errors.error}
        autoHideDuration={6000}
      >
        <SnackbarContent
          style={{ backgroundColor: '#d32f2f', color: 'white' }}
          onClose={(event, reason) => this.props.amendError(event, reason)}
          message={this.props.errors.message}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={(event, reason) => this.props.amendError(event, reason)}
            >
              <Icon>clear</Icon>
            </IconButton>
          ]}
        />
      </Snackbar>
    )
  }

  render() {
    return (
      <Fragment>
        {this.renderContent()}
        {this.renderErrorSnackBar()}
      </Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
