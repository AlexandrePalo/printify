import { connect } from 'react-redux'
import Files from '../pres/Files'

const mapStateToProps = state => ({
  byId: state.files.byId,
  byHash: state.files.byHash
})

const mapDispatchToProps = dispatch => ({
  deleteFile: id =>
    dispatch({
      type: 'DELETE_FILE',
      payload: { id }
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Files)
