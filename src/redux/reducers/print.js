import moment from 'moment'

const initial = {
  file: {
    id: 1,
    name: 'Cat low poly',
    duration: 2000,
    date: moment('2018-01-19').toISOString()
  },
  begin: null,
  paused: false,
  end: null,
  finished: false,
  feedRate: 100
}

const printReducer = (state = initial, action) => {
  switch (action.type) {
    case 'SET_PRINTED_FILE':
      return {
        ...initial,
        file: action.payload.file,
        feedRate: state.feedRate
      }
    case 'START_PRINTING':
      return {
        ...state,
        begin: moment().toISOString(),
        finished: false,
        end: null,
        paused: false
      }
    case 'STOP_PRINTING':
      return {
        ...state,
        end: moment().toISOString(),
        paused: false,
        finished: false
      }
    case 'PAUSE_PRINTING':
      return {
        ...state,
        end: null,
        paused: true,
        finished: false
      }
    case 'SET_PRINTED_FEEDRATE':
      return {
        ...state,
        feedRate: action.payload.value
      }
    default:
      return state
  }
}

export default printReducer
