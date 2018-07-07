import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = {
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 300
  },
  cardContent: {}
}

class Login extends Component {
  renderContent() {
    return (
      <form noValidate autoComplete="off">
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
    return (
      <Card style={styles.card}>
        {this.props.logging && (
          <div className="overlay loading">
            <CircularProgress size={32} thickness={4} />
          </div>
        )}
        <CardContent
          style={styles.cardContent}
          className={this.props.logging ? 'blurred' : ''}
        >
          <Typography variant="headline">Printify</Typography>
          <div style={styles.content}>{this.renderContent()}</div>
        </CardContent>
        <CardActions className={this.props.logging ? 'blurred' : ''}>
          {this.renderActions()}
        </CardActions>
      </Card>
    )
  }
}

export default Login
