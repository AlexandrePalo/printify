import React, { Component, Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import ProgressPrinting from './ProgressPrinting'
import moment from 'moment'

import StepperPrinting from './StepperPrinting'

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 400
  },
  cardContent: {},
  content: {},
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
    print: {
      begin: null,
      paused: false,
      end: null,
      finished: false
    }
  }

  changeFeedRate(change) {
    this.setState({ feedRate: this.state.feedRate + change })
  }

  start() {
    this.setState({
      print: {
        ...this.state.print,
        paused: false,
        end: null,
        finished: false,
        begin: moment().toISOString()
      }
    })
  }

  stop() {
    // manual stop, not finished
    this.setState(
      this.setState({
        print: {
          ...this.state.print,
          end: moment().toISOString(),
          paused: false,
          finished: false
        }
      })
    )
  }

  pause() {
    this.setState(
      this.setState({
        print: {
          ...this.state.print,
          paused: true,
          finished: false,
          end: null
        }
      })
    )
  }

  renderControlButtons() {
    // Printing
    if (
      this.state.print.begin &&
      !this.state.print.paused &&
      !this.state.print.end
    ) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            alignSelf: 'stretch',
            marginTop: 8
          }}
        >
          <IconButton
            style={{ height: 72, width: 72 }}
            onClick={() => this.pause()}
          >
            <Icon style={{ fontSize: 64 }}>pause</Icon>
          </IconButton>
          <IconButton
            style={{ height: 72, width: 72 }}
            onClick={() => this.stop()}
          >
            <Icon style={{ fontSize: 64 }}>stop</Icon>
          </IconButton>
        </div>
      )
    }
    // Paused
    if (this.state.print.paused) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            alignSelf: 'stretch',
            marginTop: 8
          }}
        >
          <Typography variant="body1" color="textSecondary">
            Paused
          </Typography>
          <IconButton
            style={{ height: 72, width: 72 }}
            onClick={() => this.start()}
          >
            <Icon style={{ fontSize: 64 }}>play_arrow</Icon>
          </IconButton>
        </div>
      )
    }

    // Stopped
    if (this.state.print.end && !this.state.print.finished) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            alignSelf: 'stretch',
            marginTop: 8
          }}
        >
          <Typography variant="body1" color="textSecondary">
            Stopped
          </Typography>
          <IconButton
            style={{ height: 72, width: 72 }}
            onClick={() => this.start()}
          >
            <Icon style={{ fontSize: 64 }}>loop</Icon>
          </IconButton>
        </div>
      )
    }

    // Not started yet
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          alignSelf: 'stretch',
          marginTop: 8
        }}
      >
        <IconButton
          style={{ height: 72, width: 72 }}
          onClick={() => this.start()}
        >
          <Icon style={{ fontSize: 64 }}>play_arrow</Icon>
        </IconButton>
      </div>
    )
  }

  renderContent() {
    return (
      <div>
        {this.renderControlButtons()}
        <StepperPrinting />
        <ProgressPrinting />
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
