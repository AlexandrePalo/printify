import React, { Component, Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import CircularProgress from '@material-ui/core/CircularProgress'

// TODO: externalize connect, props

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 300
  },
  cardContent: {},
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 16
  },
  title: {
    textAlign: 'left'
  },
  right: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column'
  },
  baudRate: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  formControl: {
    minWidth: 150
  },
  buttonWrapper: {
    position: 'relative'
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  },
  faddedButton: {
    textShadow: '0 0 5px rgba(0,0,0,0.5)',
    color: 'transparent'
  }
}

class State extends Component {
  state = {
    port: 0,
    baudRate: 124000,
    connected: false,
    connecting: false
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  connect() {
    this.setState({ connected: true })
  }
  disconnect() {
    this.setState({ connected: false })
  }

  renderContent() {
    const { connected } = this.state
    if (connected) {
      return (
        <Fragment>
          <div
            style={{
              display: 'flex',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column'
              }}
            >
              <Typography variant="body1" color="textSecondary">
                Port serie {this.state.port}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Baud rate {this.state.baudRate} bits/s
              </Typography>
            </div>
            <Typography variant="body1" color="textSecondary">
              Connected
            </Typography>
          </div>
        </Fragment>
      )
    } else {
      if (this.state.connecting) {
        // loading
      } else {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flex: 1
            }}
          >
            <FormControl>
              <InputLabel htmlFor="port">Port</InputLabel>
              <Select
                value={this.state.port}
                onChange={this.handleChange}
                inputProps={{
                  name: 'port',
                  id: 'port'
                }}
              >
                <MenuItem value={0}>serie 0</MenuItem>
                <MenuItem value={1}>serie 1</MenuItem>
                <MenuItem value={2}>serie 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="port">Baud rate</InputLabel>
              <Select
                value={this.state.baudRate}
                onChange={this.handleChange}
                inputProps={{
                  name: 'baudRate',
                  id: 'baudRate'
                }}
              >
                <MenuItem value={124000}>124000</MenuItem>
                <MenuItem value={172000}>172000</MenuItem>
                <MenuItem value={200000}>200000</MenuItem>
              </Select>
            </FormControl>
          </div>
        )
      }
    }
  }

  renderActions() {
    const { connected } = this.state
    if (connected) {
      return (
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => this.disconnect()}
        >
          Disconnect
        </Button>
      )
    } else {
      return (
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => this.connect()}
        >
          Connect
        </Button>
      )
    }
  }
  render() {
    return (
      <Card style={styles.card}>
        <CardContent style={styles.cardContent}>
          <Typography variant="headline">Printer state</Typography>
          <div style={styles.content}>{this.renderContent()}</div>
        </CardContent>
        <CardActions>{this.renderActions()}</CardActions>
      </Card>
    )
  }
}

export default State
