import moment from 'moment'

const initial = {
  byId: [1, 2, 3],
  byHash: {
    1: {
      id: 1,
      name: 'Cat low poly',
      duration: 100,
      date: moment('2018-01-19').toISOString()
    },
    2: {
      id: 2,
      name: 'Gears 20x30',
      duration: 3987,
      date: moment('2018-06-24').toISOString()
    },
    3: {
      id: 3,
      name: 'Flower pot',
      duration: 28109,
      date: moment('2018-06-20').toISOString()
    }
  }
}

const filesReducer = (state = initial, action) => {
  switch (action.type) {
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
