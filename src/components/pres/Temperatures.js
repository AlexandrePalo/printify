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
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { fp1 } from '../../utils/numbers'

// TODO: externalize state function and temperature values

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column'
  },
  cardContent: {},
  content: {
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
  state = {
    bed: {
      current: 40.0,
      target: 60.0,
      set: false
    },
    extruder: {
      current: 198.0,
      target: 200.0,
      set: false
    }
  }

  renderTemperatureTarget(probe) {
    let target = this.state[probe].target
      ? this.state[probe].target
      : this.state[probe].current
    if (this.state[probe].set) {
      return (
        <TableCell component="th" scope="row">
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}
          >
            <form
              onSubmit={() =>
                this.setState({
                  [probe]: {
                    ...this.state[probe],
                    set: false,
                    target
                  }
                })
              }
            >
              <FormControl>
                <Input
                  id="bedTarget"
                  label="target"
                  onChange={e => {
                    target = e.target.value
                  }}
                  type="number"
                  defaultValue={target}
                  style={{ width: 40, fontSize: 14 }}
                />
              </FormControl>
              <IconButton
                style={{ height: 24, width: 24 }}
                type="button"
                onClick={() => {
                  this.setState({
                    [probe]: {
                      ...this.state[probe],
                      set: false,
                      target
                    }
                  })
                }}
              >
                <Icon style={{ fontSize: 16 }}>done</Icon>
              </IconButton>
            </form>
          </div>
        </TableCell>
      )
    } else {
      if (this.state[probe].target) {
        return (
          <TableCell component="th" scope="row">
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end'
              }}
            >
              <Icon style={{ fontSize: 16 }}>flash_on</Icon>
              <Typography variant="body1" color="textSecondary">
                {fp1(this.state[probe].target)}
              </Typography>
              <IconButton
                style={{ height: 24, width: 24, marginLeft: 8 }}
                onClick={() =>
                  this.setState({
                    [probe]: {
                      ...this.state[probe],
                      set: true
                    }
                  })
                }
              >
                <Icon style={{ fontSize: 16 }}>edit</Icon>
              </IconButton>
              <IconButton
                style={{ height: 24, width: 24 }}
                onClick={() => {
                  this.setState({
                    [probe]: {
                      ...this.state[probe],
                      target: null
                    }
                  })
                }}
              >
                <Icon style={{ fontSize: 16 }}>clear</Icon>
              </IconButton>
            </div>
          </TableCell>
        )
      } else {
        return (
          <TableCell component="th" scope="row">
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end'
              }}
            >
              <IconButton
                style={{ height: 24, width: 24 }}
                onClick={() =>
                  this.setState({
                    [probe]: {
                      ...this.state[probe],
                      set: true
                    }
                  })
                }
              >
                <Icon style={{ fontSize: 16 }}>edit</Icon>
              </IconButton>
            </div>
          </TableCell>
        )
      }
    }
  }

  renderContent() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Probe</TableCell>
            <TableCell>Current (°C)</TableCell>
            <TableCell numeric>Target (°C)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key="extruder">
            <TableCell component="th" scope="row">
              Extuder
            </TableCell>
            <TableCell component="th" scope="row">
              {fp1(this.state.extruder.current)}
            </TableCell>
            {this.renderTemperatureTarget('extruder')}
          </TableRow>
          <TableRow key="bed">
            <TableCell component="th" scope="row">
              Bed
            </TableCell>
            <TableCell component="th" scope="row">
              {fp1(this.state.bed.current)}
            </TableCell>
            {this.renderTemperatureTarget('bed')}
          </TableRow>
        </TableBody>
      </Table>
    )
    /*
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
              {this.state.extruder.current} °C
            </Typography>
            {!this.props.printing && this.renderTemperatureTarget('extruder')}
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
              {this.state.bed.current} °C
            </Typography>
            {!this.props.printing && this.renderTemperatureTarget('bed')}
          </div>
        </div>
      </Fragment>
    )
    */
  }

  renderActions() {
    if (
      (this.state.bed.target || this.state.extruder.target) &&
      !this.props.printing
    ) {
      return (
        <Button
          size="small"
          onClick={() =>
            this.setState({
              bed: { ...this.state.bed, target: null },
              extruder: { ...this.state.extruder, target: null }
            })
          }
        >
          Stop
        </Button>
      )
    }
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
