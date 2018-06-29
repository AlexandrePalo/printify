import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 300
  },
  cardContent: {}
}

class Login extends Component {
  renderMessage() {
    if (this.props.message) {
      return (
        <div
          style={{
            marginTop: 16,
            marginBottom: -16
          }}
        >
          <Typography variant="subheading">{this.props.message}</Typography>
        </div>
      )
    }
  }

  renderContent() {
    return (
      <form noValidate autoComplete="off">
        {this.renderMessage()}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1
          }}
        >
          <TextField
            id="username"
            label="Username"
            value={this.props.username}
            onChange={e => this.props.setUsername(e.target.value)}
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            value={this.props.password}
            onChange={e => this.props.setPassword(e.target.value)}
            margin="normal"
            type="password"
          />
        </div>
      </form>
    )
  }

  renderActions() {
    return (
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={() =>
          this.props.login(this.props.username, this.props.password)
        }
      >
        Login
      </Button>
    )
  }

  render() {
    if (this.props.logging) {
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
          <Typography variant="headline">Printify</Typography>
          <div style={styles.content}>{this.renderContent()}</div>
        </CardContent>
        <CardActions>{this.renderActions()}</CardActions>
      </Card>
    )
  }
}

export default Login
