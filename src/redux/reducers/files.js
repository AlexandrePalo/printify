const initial = {
  fetching: false,
  error: false,
  dir: '/Users/alexandrepalo/software/printify-api/public/3D',
  byId: [],
  byHash: {}
}

const filesReducer = (state = initial, action) => {
  switch (action.type) {
    case 'GET_FILES':
      if (action.payload.fetching) {
        return { ...state, fetching: true }
      }
      if (action.payload.error) {
        return {
          ...state,
          fetching: false,
          error: true
        }
      }

      let nbyId = action.payload.files.map((f, i) => i)
      let nbyHash = {}
      action.payload.files.forEach((f, i) => {
        nbyHash[i] = f
      })
      return {
        ...state,
        fetching: false,
        byId: nbyId,
        byHash: nbyHash
      }

    case 'ADD_FILE':
      return {
        ...state,
        byId: [...state.byId, action.payload.file.id],
        byHash: {
          ...state.byHash,
          [action.payload.file.id]: action.payload.file
        }
      }
    case 'DELETE_FILE':
      const prunedId = state.byId.filter(f => f !== action.payload.id)
      const prunedHash = { ...state.byHash }
      return { ...state, byId: prunedId, byHash: prunedHash }
    default:
      return state
  }
}

export default filesReducer
