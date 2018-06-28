import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'

const styles = {
  appbar: {
    marginBottom: 8
  }
}

class Header extends Component {
  render() {
    return (
      <AppBar position="static" color="default" style={styles.appbar}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon style={{ fontSize: 32, marginRight: 8 }}>offline_bolt</Icon>
            <Typography variant="title" color="inherit">
              Printify
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{ display: 'flex', alignItems: 'center', marginRight: 16 }}
            >
              <Typography variant="subheading">
                FR {this.props.print.feedRate}%
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Icon style={{ fontSize: 24, marginRight: 8 }}>
                vertical_align_bottom
              </Icon>
              <Typography variant="subheading">
                {this.props.temperatures.extruder.current}°C
              </Typography>
            </div>
            <div
              style={{ display: 'flex', alignItems: 'center', marginLeft: 16 }}
            >
              <Icon style={{ fontSize: 24, marginRight: 8 }}>space_bar</Icon>
              <Typography variant="subheading">
                {this.props.temperatures.bed.current}°C
              </Typography>
            </div>
            <div
              style={{ display: 'flex', alignItems: 'center', marginLeft: 16 }}
            >
              <Icon style={{ fontSize: 24, marginRight: 8 }}>printer</Icon>
              <Typography variant="subheading" style={{ marginRight: 8 }}>
                {this.props.print.file.name}
              </Typography>
              <Typography variant="subheading">
                {Math.round(
                  this.props.print.current /
                    this.props.print.file.duration *
                    100,
                  2
                )}%
              </Typography>
            </div>
            <div
              style={{ display: 'flex', alignItems: 'center', marginLeft: 16 }}
            >
              <Typography variant="subheading" style={{ marginRight: 8 }}>
                {this.props.print.steps[this.props.print.activeStep]}
              </Typography>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="subheading">Alexandre PALO</Typography>
            <IconButton
              style={{ height: 32, width: 32, marginLeft: 16 }}
              onClick={() => console.log('account')}
            >
              <Icon style={{ fontSize: 24 }}>account_circle</Icon>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header
