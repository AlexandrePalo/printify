import { connect } from 'react-redux'
import Login from '../pres/Login'
import { login } from '../../redux/actions/login'

const mapStateToProps = state => ({
  ...state.login
})

const mapDispatchToProps = dispatch => ({
  setUsername: value =>
    dispatch({
      type: 'SET_FORM_USERNAME',
      payload: { value }
    }),
  setPassword: value =>
    dispatch({
      type: 'SET_FORM_PASSWORD',
      payload: { value }
    }),
  login: (username, password) => dispatch(login(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
