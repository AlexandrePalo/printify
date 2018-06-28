import { connect } from 'react-redux'
import Files from '../pres/Files'

const mapStateToProps = state => ({
  byId: state.files.byId,
  byHash: state.files.byHash,
  breakpoint: state.breakpoint
})

const mapDispatchToProps = dispatch => ({
  deleteFile: id =>
    dispatch({
      type: 'DELETE_FILE',
      payload: { id }
    }),
  setPrintedFile: file =>
    dispatch({ type: 'SET_PRINTED_FILE', payload: { file } })
})

export default connect(mapStateToProps, mapDispatchToProps)(Files)
