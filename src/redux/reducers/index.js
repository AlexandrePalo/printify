import { combineReducers } from 'redux'
import positionReducer from './position'
import temperaturesReducer from './temperatures'
import printReducer from './print'

const main = combineReducers({
  position: positionReducer,
  temperatures: temperaturesReducer,
  print: printReducer
})

export default main
