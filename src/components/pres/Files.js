import React, { Component, Fragment } from 'react'
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
import CircularProgress from '@material-ui/core/CircularProgress'
import moment from 'moment'
import { shortEnHumanizer } from '../../utils/durations'
import './styles.css'

const styles = {
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  },
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
  componentWillMount() {
    this.props.getFiles(this.props.dir)
  }

  renderContent() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="none" style={{ padding: 30 }}>
              Date
            </TableCell>
            <TableCell padding="none">Name</TableCell>
            <TableCell padding="none">Duration</TableCell>
            <TableCell padding="none">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.byId.map(id => (
            <TableRow key={id}>
              <TableCell padding="none" component="th" scope="row">
                {moment(this.props.byHash[id].date).format('DD/MM/YY')}
              </TableCell>
              <TableCell padding="none" component="th" scope="row">
                {this.props.byHash[id].name}
              </TableCell>
              <TableCell padding="none" component="th" scope="row">
                {shortEnHumanizer(this.props.byHash[id].duration * 1000, {
                  language: 'shortEn',
                  units: ['h', 'm', 's'],
                  delimiter: ' ',
                  round: true
                })}
              </TableCell>
              <TableCell padding="none" component="th" scope="row">
                {this.props.byHash[id].loading ? (
                  <CircularProgress size={24} />
                ) : (
                  <Fragment>
                    <IconButton
                      style={{ height: 24, width: 24 }}
                      onClick={() =>
                        this.props.setPrintedFile(this.props.byHash[id])
                      }
                    >
                      <Icon style={{ fontSize: 16 }}>print</Icon>
                    </IconButton>
                    <IconButton
                      style={{ height: 24, width: 24 }}
                      onClick={() =>
                        this.props.deleteFile(id, this.props.byHash[id].path)
                      }
                    >
                      <Icon style={{ fontSize: 16 }}>delete</Icon>
                    </IconButton>
                  </Fragment>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }

  renderActions() {
    return (
      <Fragment>
        <Button size="small" label="Add file">
          <label htmlFor="add_file">Add file</label>
          <input
            id="add_file"
            type="file"
            style={{ display: 'none' }}
            onChange={e => {
              console.log(e.target.files)
            }}
          />
        </Button>
        <Button
          size="small"
          onClick={() => this.props.getFiles(this.props.dir)}
        >
          Refresh
        </Button>
      </Fragment>
    )
  }

  render() {
    return (
      <Card style={styles.card}>
        {this.props.fetching && (
          <div className="overlay loading">
            <CircularProgress size={32} thickness={4} />
          </div>
        )}
        <CardContent className={this.props.fetching ? 'blurred' : ''}>
          <Typography variant="headline">Files</Typography>
          <div style={styles.content}>{this.renderContent()}</div>
        </CardContent>
        <CardActions className={this.props.fetching ? 'blurred' : ''}>
          {this.renderActions()}
        </CardActions>
      </Card>
    )
  }
}

export default Files
