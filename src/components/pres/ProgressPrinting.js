import React, { Component } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import { shortEnHumanizer } from '../../utils/durations'

class ProgressPrinting extends Component {
  getCurrentPercentage() {
    return Math.round(this.props.current / this.props.file.duration * 100, 2)
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
              {shortEnHumanizer(this.props.current * 1000, {
                language: 'shortEn',
                units: ['h', 'm', 's'],
                delimiter: ' ',
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
              {shortEnHumanizer(this.props.file.duration * 1000, {
                language: 'shortEn',
                units: ['h', 'm', 's'],
                delimiter: ' ',
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
