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

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 300
  },
  cardContent: {},
  content: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
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
    printer: 'Prusa MK2S',
    baudrate: 124000
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  renderContent() {
    const { connected } = this.props
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
                Port serie 0
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Baud rate 200000 bits/s
              </Typography>
            </div>
            <Typography variant="body1" color="textSecondary">
              Connected
            </Typography>
          </div>
        </Fragment>
      )
    } else {
      return <Fragment />
    }
  }
  renderActions() {
    const { connected, connect, connecting } = this.props
    if (connected) {
      return <Button size="small">Disconnect</Button>
    } else {
      return <Fragment />
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
