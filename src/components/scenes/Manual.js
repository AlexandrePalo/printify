import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Files from '../cont/Files'
import Printing from '../cont/Printing'
import Temperatures from '../cont/Temperatures'
import PrintHead from '../cont/PrintHead'
import Header from '../cont/Header'
import { setClass } from '../../utils/responsive'
import './Manual.css'

class Manual extends Component {
  state = {
    activeTab: 0
  }

  handleChangeTab = (event, value) => {
    this.setState({ activeTab: value })
  }

  renderPrintingTab() {
    return (
      <div
        className={setClass(
          {
            default: 'printing-tab-large',
            tabletLg: 'printing-tab-medium',
            mobileLg: 'printing-tab-small'
          },
          this.props.breakpoint
        )}
      >
        <Printing />
        <Files />
      </div>
    )
  }

  renderControlTab() {
    return (
      <div
        className={setClass(
          {
            default: 'control-tab-large',
            tabletLg: 'control-tab-medium',
            mobileLg: 'control-tab-small'
          },
          this.props.breakpoint
        )}
      >
        <PrintHead />
        <Temperatures />
      </div>
    )
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div
          style={{ display: 'flex', flexDirection: 'column', height: '90%' }}
        >
          <Tabs
            value={this.state.activeTab}
            onChange={this.handleChangeTab}
            indicatorColor="primary"
            textColor="primary"
            centered
            style={{ marginTop: 8, marginBottom: 8 }}
          >
            <Tab label="Printing" />
            <Tab label="Control" />
          </Tabs>
          {this.state.activeTab === 0 && this.renderPrintingTab()}
          {this.state.activeTab === 1 && this.renderControlTab()}
        </div>
      </Fragment>
    )
  }
}

export default connect(state => ({ breakpoint: state.breakpoint }), null)(
  Manual
)
