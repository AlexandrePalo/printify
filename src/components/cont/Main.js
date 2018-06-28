import React, { Component } from 'react'
import { connect } from 'react-redux'
import Print from '../scenes/Print'
import Manual from '../scenes/Manual'

const mapStateToProps = state => ({
  printing: state.print.begin
})

const mapDispatchToProps = dispatch => ({})

class Main extends Component {
  render() {
    if (this.props.printing) {
      return <Print />
    } else {
      return <Manual />
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
