import React, { Component, Fragment } from 'react'
import Files from '../cont/Files'
import Printing from '../pres/Printing'
import State from '../cont/State'
import Temperatures from '../cont/Temperatures'
import PrintHead from '../cont/PrintHead'

class Manual extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Printing />
          <div>
            <PrintHead />
            <Temperatures />
          </div>
        </div>
        <div>
          <State />
          <Files />
        </div>
      </Fragment>
    )
  }
}

export default Manual
