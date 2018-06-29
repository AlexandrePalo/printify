import { combineReducers } from 'redux'
import positionReducer from './position'
import temperaturesReducer from './temperatures'
import printReducer from './print'
import statusReducer from './status'
import filesReducer from './files'
import breakpointReducer from './breakpoint'
import loginReducer from './login'

const main = combineReducers({
  status: statusReducer,
  position: positionReducer,
  temperatures: temperaturesReducer,
  print: printReducer,
  files: filesReducer,
  breakpoint: breakpointReducer,
  login: loginReducer
})

export default main
