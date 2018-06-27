import React, { Component, Fragment } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import humanizeDuration from 'humanize-duration'

class ProgressPrinting extends Component {
  state = {
    current: 9867,
    total: 28109
  }

  getCurrentPercentage() {
    return Math.round(this.state.current / this.state.total * 100, 2)
  }

  render() {
    return (
      <div style={{ marginBottom: 16 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 8
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
          >
            <Typography variant="body1" color="textSecondary">
              Elapsed
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {humanizeDuration(this.state.current * 1000, {
                language: 'en',
                units: ['h', 'm'],
                round: true
              }) +
                ' ' +
                '(' +
                (this.getCurrentPercentage() + '%)')}
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end'
            }}
          >
            <Typography variant="body1" color="textSecondary">
              Total
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {humanizeDuration(this.state.total * 1000, {
                language: 'en',
                units: ['h', 'm'],
                round: true
              })}
            </Typography>
          </div>
        </div>
        <LinearProgress
          variant="determinate"
          value={this.getCurrentPercentage()}
        />
      </div>
    )
  }
}

export default ProgressPrinting
