import { combineReducers } from 'redux'
import positionReducer from './position'
import temperaturesReducer from './temperatures'
import printReducer from './print'
import statusReducer from './status'

const main = combineReducers({
  status: statusReducer,
  position: positionReducer,
  temperatures: temperaturesReducer,
  print: printReducer
})

export default main
