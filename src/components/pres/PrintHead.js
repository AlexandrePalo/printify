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

import { fp3 } from '../../utils/numbers'

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

class PrintHead extends Component {
  state = {
    x: {
      current: 1.0,
      target: null,
      speed: 3000,
      set: false,
      setSpeed: false,
      stepper: false
    },
    y: {
      current: 1.0,
      target: null,
      speed: 3000,
      set: false,
      setSpeed: false,
      stepper: false
    },
    z: {
      current: 1.0,
      target: null,
      speed: 1000,
      set: false,
      setSpeed: false,
      stepper: true
    }
  }

  goToTarget(a) {
    this.setState({
      [a]: {
        ...this.state[a],
        current: this.state[a].target,
        target: null
      }
    })
  }

  goToHome(a) {
    this.setState({
      [a]: {
        ...this.state[a],
        current: 0.0
      }
    })
  }

  goToLeft(a) {
    this.setState({
      [a]: {
        ...this.state[a],
        current: this.state[a].current - 0.1
      }
    })
  }

  goToRight(a) {
    this.setState({
      [a]: {
        ...this.state[a],
        current: this.state[a].current + 0.1
      }
    })
  }

  goToLeftFast(a) {
    this.setState({
      [a]: {
        ...this.state[a],
        current: this.state[a].current - 1.0
      }
    })
  }

  goToRightFast(a) {
    this.setState({
      [a]: {
        ...this.state[a],
        current: this.state[a].current + 1.0
      }
    })
  }

  disableStepper(a) {
    this.setState({
      [a]: {
        ...this.state[a],
        stepper: false
      }
    })
  }

  enableStepper(a) {
    this.setState({
      [a]: {
        ...this.state[a],
        stepper: true
      }
    })
  }

  renderPositionTarget(a) {
    let target = this.state[a].target
      ? this.state[a].target
      : this.state[a].current
    if (this.state[a].set) {
      return (
        <TableCell numeric>
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
                  [a]: {
                    ...this.state[a],
                    set: false,
                    target: target
                  }
                })
              }
            >
              <FormControl>
                <Input
                  id={a + 'target'}
                  label="target"
                  onChange={e => {
                    target = e.target.value
                  }}
                  type="number"
                  inputProps={{ min: 0.0, step: 0.001 }}
                  defaultValue={target}
                  style={{ width: 70, fontSize: 14 }}
                />
              </FormControl>
              <IconButton
                style={{ height: 24, width: 24 }}
                type="button"
                onClick={() => {
                  this.setState({
                    [a]: {
                      ...this.state[a],
                      set: false,
                      target: target
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
      if (this.state[a].target) {
        return (
          <TableCell numeric>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end'
              }}
            >
              <IconButton
                style={{ height: 24, width: 24, marginRight: 8 }}
                onClick={() => this.goToTarget(a)}
              >
                <Icon style={{ fontSize: 16 }}>compare_arrows</Icon>
              </IconButton>
              <Typography variant="body1" color="textSecondary">
                {fp3(this.state[a].target)}
              </Typography>
              <IconButton
                style={{ height: 24, width: 24, marginLeft: 8 }}
                onClick={() =>
                  this.setState({
                    [a]: {
                      ...this.state[a],
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
                    [a]: {
                      ...this.state[a],
                      target: null
                    }
                  })
                }}
              >
                <Icon style={{ fontSize: 16 }}>clear</Icon>
              </IconButton>
              <IconButton
                style={{ height: 24, width: 24 }}
                onClick={() => this.goToHome(a)}
              >
                <Icon style={{ fontSize: 16 }}>home</Icon>
              </IconButton>
            </div>
          </TableCell>
        )
      } else {
        return (
          <TableCell numeric>
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
                    [a]: {
                      ...this.state[a],
                      set: true
                    }
                  })
                }
              >
                <Icon style={{ fontSize: 16 }}>edit</Icon>
              </IconButton>
              <IconButton
                style={{ height: 24, width: 24 }}
                onClick={() => this.goToHome(a)}
              >
                <Icon style={{ fontSize: 16 }}>home</Icon>
              </IconButton>
            </div>
          </TableCell>
        )
      }
    }
  }

  renderSpeed(a) {
    let speed = this.state[a].speed
    if (this.state[a].setSpeed) {
      return (
        <TableCell numeric>
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
                  [a]: {
                    ...this.state[a],
                    setSpeed: false,
                    speed
                  }
                })
              }
            >
              <FormControl>
                <Input
                  id={a + 'speed'}
                  label="speed"
                  onChange={e => {
                    speed = e.target.value
                  }}
                  type="number"
                  inputProps={{ min: 0.0, step: 1 }}
                  defaultValue={speed}
                  style={{ width: 70, fontSize: 14 }}
                />
              </FormControl>
              <IconButton
                style={{ height: 24, width: 24 }}
                type="button"
                onClick={() => {
                  this.setState({
                    [a]: {
                      ...this.state[a],
                      setSpeed: false,
                      speed
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
      return (
        <TableCell numeric>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}
          >
            <Typography variant="body1" color="textSecondary">
              {this.state[a].speed}
            </Typography>
            <IconButton
              style={{ height: 24, width: 24, marginLeft: 8 }}
              onClick={() =>
                this.setState({
                  [a]: {
                    ...this.state[a],
                    setSpeed: true
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

  renderStepperIndicator(a) {
    if (this.state[a].stepper) {
      return (
        <IconButton
          style={{ height: 24, width: 24 }}
          onClick={() => this.disableStepper(a)}
        >
          <Icon
            style={{
              fontSize: 16,
              color: 'rgba(0, 0, 0, 0.32)'
            }}
          >
            flash_on
          </Icon>
        </IconButton>
      )
    } else {
      return (
        <IconButton
          style={{ height: 24, width: 24 }}
          onClick={() => this.enableStepper(a)}
        >
          <Icon
            style={{
              fontSize: 16,
              color: 'rgba(0, 0, 0, 0.32)',
              position: 'absolute'
            }}
          >
            flash_on
          </Icon>
          <Icon
            style={{
              fontSize: 16,
              color: 'rgba(0, 0, 0, 0.54)'
            }}
          >
            clear
          </Icon>
        </IconButton>
      )
    }
  }

  renderContent() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Axis</TableCell>
            <TableCell>Current (mm)</TableCell>
            <TableCell numeric>Target (mm)</TableCell>
            <TableCell numeric>Speed (mm/min)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {['x', 'y', 'z'].map(a => (
            <TableRow key={a}>
              <TableCell component="th" scope="row">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                  }}
                >
                  {this.renderStepperIndicator(a)}
                  {a.toUpperCase()}
                </div>
              </TableCell>
              <TableCell numeric>
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
                    onClick={() => this.goToLeftFast(a)}
                  >
                    <Icon style={{ fontSize: 16 }}>arrow_left</Icon>
                    <Icon style={{ fontSize: 16, marginLeft: -12 }}>
                      arrow_left
                    </Icon>
                  </IconButton>
                  <IconButton
                    style={{ height: 24, width: 24, marginRight: 8 }}
                    onClick={() => this.goToLeft(a)}
                  >
                    <Icon style={{ fontSize: 16 }}>arrow_left</Icon>
                  </IconButton>
                  {fp3(this.state[a].current)}
                  <IconButton
                    style={{ height: 24, width: 24, marginLeft: 8 }}
                    onClick={() => this.goToRight(a)}
                  >
                    <Icon style={{ fontSize: 16 }}>arrow_right</Icon>
                  </IconButton>
                  <IconButton
                    style={{ height: 24, width: 24 }}
                    onClick={() => this.goToRightFast(a)}
                  >
                    <Icon style={{ fontSize: 16, marginRight: -12 }}>
                      arrow_right
                    </Icon>
                    <Icon style={{ fontSize: 16 }}>arrow_right</Icon>
                  </IconButton>
                </div>
              </TableCell>
              {this.renderPositionTarget(a)}
              {this.renderSpeed(a)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }

  renderActions() {
    let actions = []
    if (
      this.state['x'].current !== 0.0 ||
      this.state['y'].current !== 0.0 ||
      this.state['z'].current !== 0.0
    ) {
      actions.push(
        <Button
          size="small"
          onClick={() => {
            this.goToHome('x')
            this.goToHome('y')
            this.goToHome('z')
          }}
        >
          All home
        </Button>
      )
    }

    if (
      this.state['x'].stepper ||
      this.state['y'].stepper ||
      this.state['z'].stepper
    ) {
      actions.push(
        <Button
          size="small"
          onClick={() => {
            this.disableStepper('x')
            this.disableStepper('y')
            this.disableStepper('z')
          }}
        >
          Disable all steppers
        </Button>
      )
    }

    if (
      !this.state['x'].stepper ||
      !this.state['y'].stepper ||
      !this.state['z'].stepper
    ) {
      actions.push(
        <Button
          size="small"
          onClick={() => {
            this.enableStepper('x')
            this.enableStepper('y')
            this.enableStepper('z')
          }}
        >
          Enable all steppers
        </Button>
      )
    }

    return <Fragment>{actions.map(a => a)}</Fragment>
  }

  render() {
    return (
      <Card style={styles.card}>
        <CardContent style={styles.cardContent}>
          <Typography variant="headline">Printer head</Typography>
          <div style={styles.content}>{this.renderContent()}</div>
        </CardContent>
        <CardActions>{this.renderActions()}</CardActions>
      </Card>
    )
  }
}

export default PrintHead
