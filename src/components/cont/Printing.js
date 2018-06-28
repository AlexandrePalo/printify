import { connect } from 'react-redux'
import Printing from '../pres/Printing'

let timer = null
const startPrinting = () => dispatch => {
  clearInterval(timer)
  timer = setInterval(() => dispatch({ type: 'PRINTING_TIMER_TICK' }), 1000)
  dispatch({ type: 'START_PRINTING' })
  dispatch({ type: 'PRINTING_TIMER_TICK' })
}

const stopPrinting = () => {
  clearInterval(timer)
  return { type: 'STOP_PRINTING' }
}

const pausePrinting = () => {
  clearInterval(timer)
  return { type: 'PAUSE_PRINTING' }
}

const resumePrinting = () => dispatch => {
  clearInterval(timer)
  timer = setInterval(() => dispatch({ type: 'PRINTING_TIMER_TICK' }), 1000)
  dispatch({ type: 'RESUME_PRINTING' })
  dispatch({ type: 'PRINTING_TIMER_TICK' })
}

const mapStateToProps = state => ({
  ...state.print
})

const mapDispatchToProps = dispatch => ({
  startPrinting: () => dispatch(startPrinting()),
  stopPrinting: () => dispatch(stopPrinting()),
  pausePrinting: () => dispatch(pausePrinting()),
  resumePrinting: () => dispatch(resumePrinting()),
  setFeedRate: value =>
    dispatch({ type: 'SET_PRINTED_FEEDRATE', payload: { value } })
})

export default connect(mapStateToProps, mapDispatchToProps)(Printing)
