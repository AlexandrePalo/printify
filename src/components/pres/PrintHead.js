import React, { Component, Fragment, cloneElement } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import Input from '@material-ui/core/Input'
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
      set: false,
      setSpeed: false
    },
    y: {
      set: false,
      setSpeed: false
    },
    z: {
      set: false,
      setSpeed: false
    }
  }

  goToTarget(a) {
    this.props.goToPosition(a, this.props[a].target)
    this.props.setPositionTarget(a, null)
  }

  goToLeft(a) {
    this.props.goToPosition(a, this.props[a].current - 0.1)
  }

  goToRight(a) {
    this.props.goToPosition(a, this.props[a].current + 0.1)
  }

  goToLeftFast(a) {
    this.props.goToPosition(a, this.props[a].current - 1)
  }

  goToRightFast(a) {
    this.props.goToPosition(a, this.props[a].current + 1)
  }

  renderPositionTarget(a) {
    let target = this.props[a].target
      ? this.props[a].target
      : this.props[a].current
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
              onSubmit={() => {
                this.setState({
                  [a]: {
                    ...this.state[a],
                    set: false
                  }
                })
                this.props.setPositionTarget(a, target)
              }}
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
                      set: false
                    }
                  })
                  this.props.setPositionTarget(a, target)
                }}
              >
                <Icon style={{ fontSize: 16 }}>done</Icon>
              </IconButton>
            </form>
          </div>
        </TableCell>
      )
    } else {
      if (this.props[a].target) {
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
                {fp3(this.props[a].target)}
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
                  this.props.setPositionTarget(a, null)
                }}
              >
                <Icon style={{ fontSize: 16 }}>clear</Icon>
              </IconButton>
              <IconButton
                style={{ height: 24, width: 24 }}
                onClick={() => this.props.goToHome(a)}
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
                onClick={() => this.props.goToHome(a)}
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
    let speed = this.props[a].speed
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
              onSubmit={() => {
                this.setState({
                  [a]: {
                    ...this.state[a],
                    setSpeed: false
                  }
                })
                this.props.setSpeed(a, speed)
              }}
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
                      setSpeed: false
                    }
                  })
                  this.props.setSpeed(a, speed)
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
              {this.props[a].speed}
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
    if (this.props[a].stepper) {
      return (
        <IconButton
          style={{ height: 24, width: 24 }}
          onClick={() => this.props.disableStepper(a)}
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
          onClick={() => this.props.enableStepper(a)}
        >
          <Icon
            style={{
              fontSize: 16,
              color: 'rgba(0, 0, 0, 0.32)'
            }}
          >
            flash_off
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
                  {fp3(this.props[a].current)}
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
      this.props['x'].current !== 0.0 ||
      this.props['y'].current !== 0.0 ||
      this.props['z'].current !== 0.0
    ) {
      actions.push(
        <Button
          size="small"
          onClick={() => {
            this.props.goToHome('x')
            this.props.goToHome('y')
            this.props.goToHome('z')
          }}
        >
          All home
        </Button>
      )
    }

    if (
      this.props['x'].stepper ||
      this.props['y'].stepper ||
      this.props['z'].stepper
    ) {
      actions.push(
        <Button
          size="small"
          onClick={() => {
            this.props.disableStepper('x')
            this.props.disableStepper('y')
            this.props.disableStepper('z')
          }}
        >
          Disable all steppers
        </Button>
      )
    }

    if (
      !this.props['x'].stepper ||
      !this.props['y'].stepper ||
      !this.props['z'].stepper
    ) {
      actions.push(
        <Button
          size="small"
          onClick={() => {
            this.props.enableStepper('x')
            this.props.enableStepper('y')
            this.props.enableStepper('z')
          }}
        >
          Enable all steppers
        </Button>
      )
    }

    return (
      <Fragment>{actions.map((a, i) => cloneElement(a, { key: i }))}</Fragment>
    )
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
