import { GraphQLClient } from 'graphql-request'
import axios from 'axios'
const endpoint = 'http://localhost:4000'

const getFiles = () => {
  return dispatch => {
    dispatch({ type: 'GET_FILES', payload: { fetching: true } })
    const query = `mutation {
      readDir {
        path duration date
      }
    }`
    const gqlc = new GraphQLClient(endpoint, {
      headers: { authorization: 'Bearer ' + sessionStorage.jwt }
    })
    gqlc
      .request(query)
      .then(data => {
        dispatch({ type: 'GET_FILES', payload: { files: data.readDir } })
      })
      .catch(err => {
        dispatch({
          type: 'GET_FILES',
          payload: { error: true, message: 'Error during fetching data' }
        })
      })
  }
}

const deleteFile = (id, path) => {
  return dispatch => {
    dispatch({ type: 'DELETE_FILE', payload: { id, fetching: true } })

    const query = `mutation($path: String) {
      deleteFile(path: $path) {
        path
      }
    }`
    const gqlc = new GraphQLClient(endpoint, {
      headers: { authorization: 'Bearer ' + sessionStorage.jwt }
    })
    gqlc
      .request(query, { path })
      .then(data => {
        dispatch({ type: 'DELETE_FILE', payload: { id } })
      })
      .catch(err => {
        dispatch({
          type: 'DELETE_FILE',
          payload: { error: true, message: 'Error during deleting file', id }
        })
      })
  }
}

const addFile = file => {
  return dispatch => {
    // Fetching
    dispatch({
      type: 'ADD_FILE',
      payload: {
        fetching: true
      }
    })

    // Send file
    const query = {
      query: `mutation ($file: Upload!) {
        addFile (file: $file) {
          path
          duration
          date
        }
      }`,
      variables: {
        file: null
      }
    }
    let map = {
      '0': ['variables.file']
    }
    let fd = new FormData()
    fd.append('operations', JSON.stringify(query))
    fd.append('map', JSON.stringify(map))
    fd.append(0, file)

    axios
      .post(endpoint, fd)
      .then(response => {
        // Add uploaded file to state
        dispatch({
          type: 'ADD_FILE',
          payload: { file: response.data.data.addFile }
        })
      })
      .catch(e => {
        // Error
        dispatch({
          type: 'ADD_FILE',
          payload: {
            error: true,
            message: 'Error adding file'
          }
        })
      })
  }
}

export { getFiles, deleteFile, addFile }
