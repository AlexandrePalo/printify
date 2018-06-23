import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = {
  appbar: {
    marginBottom: 30
  }
}

class Header extends Component {
  render() {
    return (
      <AppBar position="static" color="default" style={styles.appbar}>
        <Toolbar>
          <Typography variant="title" color="inherit">
            Printify
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header
