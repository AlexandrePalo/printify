import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid'
import Files from '../cont/Files'
import Printing from '../cont/Printing'
import Temperatures from '../cont/Temperatures'
import PrintHead from '../cont/PrintHead'
import Header from '../cont/Header'
import './Manual.css'
import '../../simple-grid.css'

class Manual extends Component {
  state = {
    activeTab: 0
  }

  handleChangeTab = (event, value) => {
    this.setState({ activeTab: value })
  }

  renderPrintingTab() {
    return (
      <Grid container spacing={16} justify="center" style={{ marginTop: 16 }}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Printing />
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <Files />
        </Grid>
      </Grid>
    )
  }

  renderControlTab() {
    return (
      <Grid container spacing={16} justify="center" style={{ marginTop: 16 }}>
        <Grid item xs={12} sm={12} md={8} lg={7}>
          <PrintHead />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={4}>
          <Temperatures />
        </Grid>
      </Grid>
    )
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Tabs
          value={this.state.activeTab}
          onChange={this.handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
          centered
          style={{ marginTop: 8 }}
        >
          <Tab label="Printing" />
          <Tab label="Control" />
        </Tabs>
        {this.state.activeTab === 0 && this.renderPrintingTab()}
        {this.state.activeTab === 1 && this.renderControlTab()}
      </Fragment>
    )
  }
}

export default connect(
  state => ({ breakpoint: state.breakpoint }),
  null
)(Manual)
