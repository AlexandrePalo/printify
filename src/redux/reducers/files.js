import path from 'path'

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
      // Global loading state
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
      // Add files to state
      let nbyId = action.payload.files.map((f, i) => i)
      let nbyHash = {}
      action.payload.files.forEach((f, i) => {
        nbyHash[i] = { ...f, name: path.basename(f.path), loading: false }
      })
      return {
        ...state,
        fetching: false,
        byId: nbyId,
        byHash: nbyHash
      }

    case 'DELETE_FILE':
      // Loading local state
      if (action.payload.fetching) {
        return {
          ...state,
          byHash: {
            ...state.byHash,
            [action.payload.id]: {
              ...state.byHash[action.payload.id],
              loading: true
            }
          }
        }
      }
      // Error
      if (action.payload.error) {
        return {
          ...state,
          byHash: {
            ...state.byHash,
            [action.payload.id]: {
              ...state.byHash[action.payload.id],
              loading: false
            }
          }
        }
      }
      // Delete file in state
      const prunedId = state.byId.filter(f => f !== action.payload.id)
      const prunedHash = { ...state.byHash }
      delete prunedHash[action.payload.id]
      return { ...state, byId: prunedId, byHash: prunedHash }

    default:
      return state
  }
}

export default filesReducer
