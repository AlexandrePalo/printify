import { request } from 'graphql-request'
const endpoint = 'http://localhost:4000'

const getFiles = dir => {
  return dispatch => {
    dispatch({ type: 'GET_FILES', payload: { fetching: true } })
    const query = `mutation($dir: String) {
      readDir(dir: $dir) {
        name duration date
      }
    }`
    request(endpoint, query, { dir }).then(data => {
      console.log(data)
      dispatch({ type: 'GET_FILES', payload: { files: data.readDir } })
    })
  }
}

export { getFiles }
