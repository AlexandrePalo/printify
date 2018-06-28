import moment from 'moment'

const initial = {
  file: {
    id: 1,
    name: 'Cat low poly',
    duration: 100,
    date: moment('2018-01-19').toISOString()
  },
  begin: null,
  current: 0,
  paused: false,
  end: null,
  finished: false,
  feedRate: 100,
  steps: ['Loading', 'Heating', 'Printing', 'Done'],
  activeStep: 0,
  completed: []
}

const printReducer = (state = initial, action) => {
  switch (action.type) {
    case 'SET_PRINTED_FILE':
      return {
        ...initial,
        file: action.payload.file,
        feedRate: state.feedRate,
        completed: []
      }
    case 'START_PRINTING':
      return {
        ...state,
        begin: moment().toISOString(),
        current: 0,
        finished: false,
        end: null,
        paused: false,
        completed: [],
        activeStep: 0
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
    case 'RESUME_PRINTING':
      return {
        ...state,
        end: null,
        paused: false,
        finished: false
      }
    case 'SET_PRINTED_FEEDRATE':
      return {
        ...state,
        feedRate: action.payload.value
      }
    case 'PRINTING_TIMER_TICK':
      // DEMO ONLY
      let activeStep = state.activeStep
      let completed = state.completed
      if (state.current === 5) {
        activeStep = activeStep + 1
        completed.push(0)
      }
      if (state.current === 10) {
        activeStep = activeStep + 1
        completed.push(1)
      }
      return {
        ...state,
        current: state.current + 1,
        activeStep,
        completed
      }
    case 'NEXT_PRINTING_STEP':
      return {
        ...state,
        completed: [...state.completed, action.payload.value],
        activeStep: state.activeStep + 1
      }
    default:
      return state
  }
}

export default printReducer
