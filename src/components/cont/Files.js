import { connect } from 'react-redux'
import Files from '../pres/Files'
import { getFiles, deleteFile } from '../../redux/actions/files'

const mapStateToProps = state => ({
  breakpoint: state.breakpoint,
  ...state.files
})

const mapDispatchToProps = dispatch => ({
  getFiles: dir => dispatch(getFiles(dir)),
  deleteFile: (id, path) => dispatch(deleteFile(id, path)),
  setPrintedFile: file =>
    dispatch({ type: 'SET_PRINTED_FILE', payload: { file } })
})

export default connect(mapStateToProps, mapDispatchToProps)(Files)
