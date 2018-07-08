import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 500
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
  componentWillMount() {
    this.props.getAvailablePorts()
  }

  renderContent() {
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
            value={this.props.port}
            onChange={e => this.props.setPort(e.target.value)}
            inputProps={{
              name: 'port',
              id: 'port'
            }}
          >
            {this.props.ports.map((p, i) => (
              <MenuItem key={i} value={i}>
                {p}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="port">Baud rate</InputLabel>
          <Select
            value={this.props.baudRate}
            onChange={e => this.props.setBaudRate(e.target.value)}
            inputProps={{
              name: 'baudRate',
              id: 'baudRate'
            }}
          >
            <MenuItem value={9600}>9600</MenuItem>
            <MenuItem value={19200}>19200</MenuItem>
            <MenuItem value={38400}>38400</MenuItem>
          </Select>
        </FormControl>
      </div>
    )
  }

  renderActions() {
    return (
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={() =>
          this.props.connect(
            this.props.ports[this.props.port],
            this.props.baudRate
          )
        }
      >
        Connect
      </Button>
    )
  }

  render() {
    if (this.props.connecting || this.props.fetchingPorts) {
      return (
        <Card style={styles.card}>
          <CardContent style={styles.cardContent}>
            <Typography variant="headline">Loading</Typography>
          </CardContent>
        </Card>
      )
    }
    return (
      <Card style={styles.card}>
        <CardContent style={styles.cardContent}>
          <Typography variant="headline">Connect to printer</Typography>
          <div style={styles.content}>{this.renderContent()}</div>
        </CardContent>
        <CardActions>{this.renderActions()}</CardActions>
      </Card>
    )
  }
}

export default State
