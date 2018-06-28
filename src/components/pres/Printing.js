import React, { Component, Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import ProgressPrinting from '../cont/ProgressPrinting'

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
  renderControlButtons() {
    // Printing
    if (this.props.begin && !this.props.paused && !this.props.end) {
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
            onClick={() => this.props.pausePrinting()}
          >
            <Icon style={{ fontSize: 64 }}>pause</Icon>
          </IconButton>
          <IconButton
            style={{ height: 72, width: 72 }}
            onClick={() => this.props.stopPrinting()}
          >
            <Icon style={{ fontSize: 64 }}>stop</Icon>
          </IconButton>
        </div>
      )
    }
    // Paused
    if (this.props.paused) {
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
            onClick={() => this.props.startPrinting()}
          >
            <Icon style={{ fontSize: 64 }}>play_arrow</Icon>
          </IconButton>
        </div>
      )
    }

    // Stopped
    if (this.props.end && !this.props.finished) {
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
            onClick={() => this.props.startPrinting()}
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
          onClick={() => this.props.startPrinting()}
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
            {this.props.file.name}
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
              onClick={() => this.props.setFeedRate(this.props.feedRate - 10)}
            >
              <Icon style={{ fontSize: 16 }}>arrow_left</Icon>
              <Icon style={{ fontSize: 16, marginLeft: -12 }}>arrow_left</Icon>
            </IconButton>
            <IconButton
              style={{ height: 24, width: 24, marginRight: 4 }}
              onClick={() => this.props.setFeedRate(this.props.feedRate - 1)}
            >
              <Icon style={{ fontSize: 16 }}>arrow_left</Icon>
            </IconButton>
            <Typography variant="body1" color="textSecondary">
              {this.props.feedRate} %
            </Typography>
            <IconButton
              style={{ height: 24, width: 24, marginLeft: 4 }}
              onClick={() => this.props.setFeedRate(this.props.feedRate + 1)}
            >
              <Icon style={{ fontSize: 16 }}>arrow_right</Icon>
            </IconButton>
            <IconButton
              style={{ height: 24, width: 24 }}
              onClick={() => this.props.setFeedRate(this.props.feedRate + 10)}
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
