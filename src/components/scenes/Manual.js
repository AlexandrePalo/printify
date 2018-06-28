import React, { Component, Fragment } from 'react'
import Files from '../cont/Files'
import Printing from '../cont/Printing'
import Temperatures from '../cont/Temperatures'
import PrintHead from '../cont/PrintHead'
import Header from '../cont/Header'

class Manual extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'stretch',
            alignItems: 'flex-start'
          }}
        >
          <Files />
          <Printing />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'stretch',
            alignItems: 'flex-start'
          }}
        >
          <PrintHead />
          <Temperatures />
        </div>
      </Fragment>
    )
  }
}

export default Manual

/*
<div
  style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 16
  }}
>
  <div style={{ marginBottom: 16 }}>
    <Files />
  </div>
  <Temperatures />
</div>
<div
  style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 16
  }}
>
  <div style={{ marginBottom: 16 }}>
    <Printing />
  </div>
  <PrintHead />
</div>
*/
