const setProbeTemperatureTarget = (probe, value) => {
  return dispatch => {
    // Fetching
    dispatch({
      type: 'SET_PROBE_TEMPERATURE_TARGET',
      payload: { fetching: true, probe }
    })
    // Command
    new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
      dispatch({
        type: 'SET_PROBE_TEMPERATURE_TARGET',
        payload: { probe, value }
      })
    })
  }
}

export { setProbeTemperatureTarget }
