import React, { Component, Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'

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
  }
}

class Temperatures extends Component {
  renderContent() {
    return (
      <Fragment>
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          <div
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'stretch',
              alignItems: 'center'
            }}
          >
            <Typography variant="body1" color="textSecondary">
              Extruder
            </Typography>
            <Typography variant="body1" color="textSecondary">
              198°C
            </Typography>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Icon>flash_on</Icon>
              <Typography variant="body1" color="textSecondary">
                205°C
              </Typography>
              <Icon>edit</Icon>
              <Icon>clear</Icon>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'stretch',
              alignItems: 'center'
            }}
          >
            <Typography variant="body1" color="textSecondary">
              Bed
            </Typography>
            <Typography variant="body1" color="textSecondary">
              46°C
            </Typography>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Icon>flash_on</Icon>
              <Typography variant="body1" color="textSecondary">
                60°C
              </Typography>
              <Icon>edit</Icon>
              <Icon>clear</Icon>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

  renderActions() {
    return <Button size="small">Stop</Button>
  }

  render() {
    return (
      <Card style={styles.card}>
        <CardContent style={styles.cardContent}>
          <Typography variant="headline">Temperatures</Typography>
          <div style={styles.content}>{this.renderContent()}</div>
        </CardContent>
        <CardActions>{this.renderActions()}</CardActions>
      </Card>
    )
  }
}

export default Temperatures
