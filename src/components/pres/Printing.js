import React, { Component, Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import Input from '@material-ui/core/Input'
import CircularProgress from '@material-ui/core/CircularProgress'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import moment from 'moment'

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 300
  },
  cardContent: {},
  content: {
    marginTop: 16
  },
  title: {
    textAlign: 'left'
  }
}

class Printing extends Component {
  state = {
    file: {
      id: 3,
      name: 'Flower pot',
      duration: 28109,
      date: moment('2018-06-20').toISOString()
    },
    feedRate: 100,
    durations: {
      past: 3000,
      total: 28109
    }
  }

  changeFeedRate(change) {
    this.setState({ feedRate: this.state.feedRate + change })
  }

  renderContent() {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            alignSelf: 'stretch'
          }}
        >
          <Typography variant="body1" color="textSecondary">
            Printing :
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {this.state.file.name}
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            alignSelf: 'stretch'
          }}
        >
          <Typography variant="body1" color="textSecondary">
            Feed rate :
          </Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <IconButton
              style={{ height: 24, width: 24 }}
              onClick={() => this.changeFeedRate(-10)}
            >
              <Icon style={{ fontSize: 16 }}>arrow_left</Icon>
              <Icon style={{ fontSize: 16, marginLeft: -12 }}>arrow_left</Icon>
            </IconButton>
            <IconButton
              style={{ height: 24, width: 24, marginRight: 4 }}
              onClick={() => this.changeFeedRate(-1)}
            >
              <Icon style={{ fontSize: 16 }}>arrow_left</Icon>
            </IconButton>
            <Typography variant="body1" color="textSecondary">
              {this.state.feedRate} %
            </Typography>
            <IconButton
              style={{ height: 24, width: 24, marginLeft: 4 }}
              onClick={() => this.changeFeedRate(1)}
            >
              <Icon style={{ fontSize: 16 }}>arrow_right</Icon>
            </IconButton>
            <IconButton
              style={{ height: 24, width: 24 }}
              onClick={() => this.changeFeedRate(10)}
            >
              <Icon style={{ fontSize: 16, marginRight: -12 }}>
                arrow_right
              </Icon>
              <Icon style={{ fontSize: 16 }}>arrow_right</Icon>
            </IconButton>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            alignSelf: 'stretch'
          }}
        >
          <IconButton
            style={{ height: 72, width: 72 }}
            onClick={() => this.pause()}
          >
            <Icon style={{ fontSize: 64 }}>arrow_right</Icon>
          </IconButton>
          <IconButton
            style={{ height: 72, width: 72 }}
            onClick={() => this.stop()}
          >
            <Icon style={{ fontSize: 64 }}>arrow_right</Icon>
          </IconButton>
        </div>
      </div>
    )
  }

  renderActions() {
    let actions = []
    return <Fragment>{actions.map(a => a)}</Fragment>
  }

  render() {
    return (
      <Card style={styles.card}>
        <CardContent style={styles.cardContent}>
          <Typography variant="headline">Printing</Typography>
          <div style={styles.content}>{this.renderContent()}</div>
        </CardContent>
        <CardActions>{this.renderActions()}</CardActions>
      </Card>
    )
  }
}

export default Printing
