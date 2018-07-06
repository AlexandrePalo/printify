import React, { Component, Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Printing from '../cont/Printing'
import Header from '../cont/Header'

class Print extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Grid container spacing={16} justify="center" style={{ marginTop: 32 }}>
          <Grid item xs={12} sm={8} md={6} lg={6}>
            <Printing />
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

export default Print
