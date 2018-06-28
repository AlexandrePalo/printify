import { connect } from 'react-redux'
import StepperPrinting from '../pres/StepperPrinting'

const mapStateToProps = state => ({
  ...state.print
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(StepperPrinting)
