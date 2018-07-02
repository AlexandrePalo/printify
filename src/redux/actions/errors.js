const amendError = (event, reason) => {
  return dispatch => {
    if (reason !== 'clickaway') {
      dispatch({ type: 'AMEND_ERROR' })
    }
  }
}

export { amendError }
