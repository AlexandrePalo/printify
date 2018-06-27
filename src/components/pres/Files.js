import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import moment from 'moment'
import humanizeDuration from 'humanize-duration'

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

class Files extends Component {
  renderContent() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell numeric>Duration</TableCell>
            <TableCell numeric>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.byId.map(id => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {moment(this.props.byHash[id].date).format('DD/MM/YY')}
              </TableCell>
              <TableCell component="th" scope="row">
                {this.props.byHash[id].name}
              </TableCell>
              <TableCell component="th" scope="row" numeric>
                {humanizeDuration(this.props.byHash[id].duration * 1000, {
                  language: 'en',
                  units: ['h', 'm'],
                  round: true
                })}
              </TableCell>
              <TableCell component="th" scope="row">
                <IconButton
                  style={{ height: 24, width: 24 }}
                  onClick={() => this.props.deleteFile(id)}
                >
                  <Icon style={{ fontSize: 16 }}>print</Icon>
                </IconButton>
                <IconButton
                  style={{ height: 24, width: 24 }}
                  onClick={() => this.props.deleteFile(id)}
                >
                  <Icon style={{ fontSize: 16 }}>delete</Icon>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }

  renderActions() {
    return (
      <Button size="small" onClick={() => console.log('add file')}>
        Add file
      </Button>
    )
  }

  render() {
    return (
      <Card style={styles.card}>
        <CardContent style={styles.cardContent}>
          <Typography variant="headline">Files</Typography>
          <div style={styles.content}>{this.renderContent()}</div>
        </CardContent>
        <CardActions>{this.renderActions()}</CardActions>
      </Card>
    )
  }
}

export default Files
