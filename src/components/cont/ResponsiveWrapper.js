import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { breakpoints } from '../../utils/responsive'

const setActiveBreakpoint = (breakpointName, breakpointSize) => {
  return {
    type: 'SET_ACTIVE_BREAKPOINT',
    breakpointName,
    breakpointSize
  }
}

class ResponsiveWrapper extends Component {
  constructor(props) {
    super(props)
    this.mediaQueryState = []
  }

  componentDidMount() {
    Object.keys(breakpoints).map(key => {
      const query = window.matchMedia(`(max-width: ${breakpoints[key]}px)`)
      query.breakpoint = breakpoints[key]
      query.name = key
      function breakpointChange() {
        this.dispatchActiveQuery()
      }
      query.addListener(breakpointChange.bind(this))
      this.mediaQueryState.push(query)
    })
    this.dispatchActiveQuery()
  }

  dispatchActiveQuery() {
    const { dispatch } = this.props
    const activeQuery = this.mediaQueryState.reduce((prev, curr) => {
      return curr.matches ? curr : prev && prev.matches ? prev : null
    })

    const breakpointName = activeQuery ? activeQuery.name : 'default'
    const breakpointSize = activeQuery && activeQuery.breakpoint
    dispatch(setActiveBreakpoint(breakpointName, breakpointSize))
  }

  render() {
    return <Fragment>{this.props.children}</Fragment>
  }
}

export default connect()(ResponsiveWrapper)
