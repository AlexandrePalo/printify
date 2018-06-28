import { connect } from 'react-redux'
import Printing from '../pres/Printing'

const mapStateToProps = state => ({
  ...state.print
})

const mapDispatchToProps = dispatch => ({
  startPrinting: () =>
    dispatch({
      type: 'START_PRINTING'
    }),
  stopPrinting: () =>
    dispatch({
      type: 'STOP_PRINTING'
    }),
  pausePrinting: () =>
    dispatch({
      type: 'PAUSE_PRINTING'
    }),
  setFeedRate: value =>
    dispatch({ type: 'SET_PRINTED_FEEDRATE', payload: { value } })
})

export default connect(mapStateToProps, mapDispatchToProps)(Printing)
