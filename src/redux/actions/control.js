/*

new Promise(resolve => setTimeout(resolve, 5000)).then(() => {
  dispatch({ type: 'GET_FILES', payload: { files: [] } })
})

*/

const enableAxisStepper = axis => {
  return dispatch => {
    // Fetching
    dispatch({
      type: 'ENABLE_AXIS_STEPPER',
      payload: { fetching: true, axis }
    })
    // Command
    new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
      dispatch({ type: 'ENABLE_AXIS_STEPPER', payload: { axis } })
    })
  }
}

const disableAxisStepper = axis => {
  return dispatch => {
    // Fetching
    dispatch({
      type: 'DISABLE_AXIS_STEPPER',
      payload: { fetching: true, axis }
    })
    // Command
    new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
      dispatch({ type: 'DISABLE_AXIS_STEPPER', payload: { axis } })
    })
  }
}

const goToAxisHome = axis => {
  return dispatch => {
    // Fetching
    dispatch({
      type: 'GO_TO_AXIS_HOME',
      payload: { fetching: true, axis }
    })
    // Command
    new Promise(resolve => setTimeout(resolve, 3000)).then(() => {
      dispatch({ type: 'GO_TO_AXIS_HOME', payload: { axis } })
    })
  }
}

const goToAxisPosition = (axis, value) => {
  return dispatch => {
    // Fetching
    dispatch({
      type: 'GO_TO_AXIS_POSITION',
      payload: { fetching: true, axis }
    })
    // Command
    new Promise(resolve => setTimeout(resolve, 3000)).then(() => {
      dispatch({ type: 'GO_TO_AXIS_POSITION', payload: { axis, value } })
    })
  }
}

export { enableAxisStepper, disableAxisStepper, goToAxisHome, goToAxisPosition }
