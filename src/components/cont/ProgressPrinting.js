import { connect } from 'react-redux'
import ProgressPrinting from '../pres/ProgressPrinting'

const mapStateToProps = state => ({
  ...state.print
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ProgressPrinting)
