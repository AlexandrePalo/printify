import path from 'path'

const initial = {
  fetching: false,
  fetchingAdd: false,
  error: false,
  dir: '/Users/alexandrepalo/software/printify-api/public/3D',
  byId: [],
  byHash: {}
}

const nextId = byId => {
  if (byId.length > 0) {
    return Math.max(byId) + 1
  }
  return 1
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
        nbyHash[i] = {
          ...f,
          id: i,
          name: path.basename(f.path),
          loading: false
        }
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

    case 'ADD_FILE':
      // Fetching
      if (action.payload.fetching) {
        return {
          ...state,
          fetchingAdd: true
        }
      }

      // Add new file
      const nId = nextId(state.byId)
      return {
        ...state,
        fetchingAdd: false,
        byHash: {
          ...state.byHash,
          [nId]: {
            ...action.payload.file,
            id: nId,
            name: path.basename(action.payload.file.path),
            loading: false
          }
        },
        byId: [...state.byId, nId]
      }

    default:
      return state
  }
}

export default filesReducer
