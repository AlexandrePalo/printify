import React, { Component, Fragment } from 'react'
import Printing from '../cont/Printing'
import Header from '../cont/Header'

class Print extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div>
          <Printing />
        </div>
      </Fragment>
    )
  }
}

export default Print
